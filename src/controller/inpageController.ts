import type { EIP1193Provider } from 'viem'
import { SiweMessage } from 'siwe'
import { BrowserProvider } from 'ethers'

interface EIP6963ProviderDetail {
  info: EIP6963ProviderInfo
  provider: EIP1193Provider
}

interface EIP6963ProviderInfo {
  uuid: string
  name: string
  icon: string
  rdns: string
}

const controller = new Map()
const providers = new Map()

// 使用 eip6963 获取provider
window.addEventListener('eip6963:announceProvider', ((
  event: CustomEvent<EIP6963ProviderDetail>,
) => {
  const { name } = event.detail.info
  providers.set(name, event.detail)
  console.log('provider', name, event.detail)
}) as EventListener)
window.dispatchEvent(new Event('eip6963:requestProvider'))

controller.set(
  'requestLogin',
  async (params: { id: string; data: any }): Promise<void> => {
    const { id, data } = params
    if (data.type === 'wallet') {
      const walletDetail = providers.get(data.wallet)
      if (walletDetail) {
        let account = ''
        let chainId = ''

        try {
          account = await walletDetail.provider.request({
            method: 'eth_requestAccounts',
          })

          chainId = await walletDetail.provider.request({
            method: 'eth_chainId',
          })

          // 切换链
          if (chainId !== '0xaa36a7') {
            await walletDetail.provider.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: '0xaa36a7' }],
            })
          }
          // 发起签名
          const provider = new BrowserProvider(walletDetail.provider)
          const signer = await provider.getSigner()

          const message = new SiweMessage({
            domain: window.location.host,
            address: await signer.getAddress(),
            statement: 'x-wallet request to login',
            uri: window.location.origin,
            version: '1',
            chainId: +chainId,
            nonce: data.nonce,
          })
          const signature = await signer.signMessage(message.prepareMessage())

          console.log('signature', signature)

          const result = await message.verify({
            signature,
            nonce: data.nonce,
          })
          console.log(result.success, '---------www1-result.data.address=',result.data.address);
          // 签名成功 通知 sidepanel
          if (result.success) {
            console.log(result.success, '---------www2-result.data.address=',result.data.address);
            window.postMessage({
              target: 'x-wallet-sidepanel',
              data: {
                success: true,
                data: result.data.address,
              },
              id,
            });
            //chrome.runtime.sendMessage({ action: 'createTab', url: 'https://x.com/XChat_Official' });
          }
        } catch (error: any) {
          // TODO 这里要处理钱包没有对应链的错误
          // if (switchError.code === 4902) {
          //   try {
          //     await okxwallet.request({
          //       method: 'wallet_addEthereumChain',
          //       params: [
          //         {
          //           chainId: '0xf00',
          //           chainName: '...',
          //           rpcUrls: ['https://...'] /* ... */,
          //         },
          //       ],
          //     });
          //   } catch (addError) {
          //     // handle "add" error
          //   }
          // }
          console.log('error', error)
          window.postMessage({
            target: 'x-wallet-sidepanel',
            data: {
              success: false,
              msg: error.message,
            },
            id,
          })
        }
      } else {
        window.postMessage({
          target: 'x-wallet-sidepanel',
          data: {
            success: false,
            msg: 'Wallet Not Found',
          },
          id,
        })
      }
    } else if(data.type === 'xwebsite'){
        console.log('data.type===xwebsite');
        window.postMessage({
          target: 'x-wallet-sidepanel',
          data: {
            success: true,
            data: 'address',
          },
          id,
        });
    }
  },
)

export function inpageController(
  event: string,
  params: { id: string; data: { method: string; data: any }; target: string },
) {
  const route = controller.get(event)
  const dataCopy = { id: params.id, data: params.data.data }
  if (route) {
    route(dataCopy)
  } else {
    window.postMessage({
      target: 'x-wallet-sidepanel',
      data: {
        code: 404,
        success: false,
        msg: 'Method Not Found',
      },
      id: params.id,
    })
  }
}
