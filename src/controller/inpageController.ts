import type { EIP1193Provider } from 'viem'
import { SiweMessage } from 'siwe'
import { BrowserProvider } from 'ethers'
import * as ethers from "ethers"; // 这样导入整个 ethers 模块
import ERC20Artifact from "./artifacts/ERC20.json"; // 代币合约 ABI
import addressArtifact from "./artifacts/address.json"; // 设置流动性的合约的地址

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
// 监听钱包 provider 的公告
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
          console.log(signer.getAddress(),'---------www0-message.prepareMessage()=', message.prepareMessage())
          const signature = await signer.signMessage(message.prepareMessage())

          console.log('signature', signature)

          const result = await message.verify({
            signature,
            nonce: data.nonce,
          })
          console.log(result.success, '---------www1-result.data.address=',result.data);
          // 签名成功 通知 sidepanel
          if (result.success) {
            console.log(result.success, '---------www2-result.data.address=',result.data.address);
            window.postMessage({
              target: 'x-wallet-sidepanel',
              data: {
                success: true,
                data: result.data,
                signature: signature,
                message: message.prepareMessage(),
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
            data: 'twitter user has logined on twitter-website and returned to us with a user-info',
          },
          id,
        });
    }
  },
);
 












/**
 * 当用户点击“创建代币”按钮后，调用该方法发起交易： 
 */
controller.set(
  "approveAndSwap",
  async (params: { id: string; 
                 data: { wallet: string, 
                         tokenName:string, tokenSymbol:string,
                         total_token:string,total_eth:string} }): Promise<void> => {
    console.log('-------------approveAndSwap-kkkkkkkkkkkkk-------');
    const { id, data } = params;
    const walletDetail = providers.get(data.wallet);
    const tokenName = data.tokenName;
    const tokenSymbol = data.tokenSymbol;
    const total_token = data.total_token;
    const total_eth = data.total_eth;
    if (!walletDetail) {
      window.postMessage(
        {
          target: "x-wallet-sidepanel2",
          data: {
            success: false,
            msg: "Wallet Not Found,please connect your wallet!!!",
          },
          id,
        },
        "*"
      );
      return;
    }
    try {
      //debugger;
      // 请求钱包地址和链 ID
      //在部署合约前，请求账户授权
      const accounts = await walletDetail.provider.request({
        method: "eth_requestAccounts",
      });
      const account = Array.isArray(accounts) ? accounts[0] : accounts;
      let chainId = await walletDetail.provider.request({
        method: "eth_chainId",
      });
      
      // 检查是否为 以太坊 Goerli  测试网（chainId "0x5"）
      // 检查是否为 以太坊 Sepolia 测试网（chainId "0xaa36a7"）
      // 检查是否为 以太坊 JuChain Testnet 测试网（chainId "0x3F8BFC2"）
      console.log('before-->JuChain Testnet chainId is:',chainId);
      if (chainId !== "0x3f8bfc2") {
        // 添加测试网
        await walletDetail.provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x3f8bfc2", // 链ID
              chainName: "JuChain Testnet", // 测试网名称
              nativeCurrency: {
                name: "ETH",
                symbol: "ETH",
                decimals: 18,
              },
              rpcUrls: ["https://testnet-rpc.juchain.org"], // RPC地址
              //blockExplorerUrls: ["https://explorer-testnet.juchain.org/"], // 区块浏览器地址
            },
          ],
        });
        // 切换到 JuChain 测试网
        await walletDetail.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x3f8bfc2" }],
        });
        chainId = "0x3f8bfc2";
      }
      console.log('JuChain Testnet chainId is:',chainId);//l39Dh5YgmN
      
      // 使用 ethers 的 BrowserProvider 和 Signer
      const provider = new ethers.BrowserProvider(walletDetail.provider);//区块链的代理
      const signer = await provider.getSigner();//自己钱包的代理
      const tokenDecimals = 18; // 假设代币精度为18
      
      //发币人的钱包私钥地址
      if (!signer) return alert("please connect wallet!!!");
      const sign_address = signer.getAddress();
      // const LIQUIDITY_CONTRACT_ADDRESS = addressArtifact.UniswapV2Router02;
      const WETH_ADDRESS = addressArtifact.WETH9Address;//weth合约地址

      //2025-01-begin
      // 1  部署 ERC20 合约, 得到代币的合约地址:contract:
            //准备“工厂对象”    执行"工厂.deploy"得到“代币合约”
      //1.1 根据函数描述-abi,代币合约的字节码-bytecode,发币人的钱包对象-singer
      //    ==>得到一个工厂factory
      const factory = new ethers.ContractFactory(ERC20Artifact.abi, ERC20Artifact.data.bytecode.object, signer);
      //1.2 你要发多少个代币（带有精度）
      const initialSupply = ethers.parseUnits(total_token, tokenDecimals);
      //1.3 执行工厂的部署函数(deploy(代币发行量,代币名称，代币编号))==>得到(刚才部署生成的)代币合约对象
      const contract = await factory.deploy(initialSupply,tokenName,tokenSymbol);
      console.log("部署交易已发送，哈希:", contract.deploymentTransaction()?.hash);
      await contract.waitForDeployment();
      const add = await  contract.getAddress();
      console.log("合约地址:", add);
      // 验证基础信息
      // console.log("代币名称:", await contract.name());
      // console.log("代币符号:", await contract.symbol());
      // console.log("总供应量:", await contract.totalSupply());
      //console.log("合约地址:", add);
      //2025-01-end
      //2025-02-begin
      //2.设置流动性:
          //授权“代币合约”给到“流动性合约”(通过"流动性合约的地址"来授权)     调用“流动性合约”（通过"流动性合约对象"来执行）
      //2.1 
      //流动性合约地址（用户提供）
      const LIQUIDITY_CONTRACT_ADDRESS = addressArtifact.UniswapV2Router02;
      //部署代币合约， 设置流动性的时候， 不需要： weth合约地址（仅仅在兑换的时候需要）
      //const WETH_ADDRESS = addressArtifact.WETH9Address;
      // 滑点设置（3%）
      const SLIPPAGE_TOLERANCE = 0.03;
      // 设置代币数量（示例：10个代币）
      const tokenAmount = ethers.parseUnits(total_token, tokenDecimals);
      // 设置ETH数量（示例：0.00001 ETH）
      const ethAmount = ethers.parseUnits(total_eth);
      //几个eth转换为多少wei的eth
      const value1 = ethers.parseEther(total_eth); // 转换为wei
      // 计算滑点后的最小值（减少3%）
      // const minTokenAmount = tokenAmount * (1 - SLIPPAGE_TOLERANCE);//不能这样计算， 只能按照下面bigint的方式
      // const minEthAmount = ethAmount * (1 - SLIPPAGE_TOLERANCE);
      const minTokenAmount = tokenAmount - (tokenAmount * BigInt(3) / BigInt(100));
      const minEthAmount = ethAmount - (ethAmount * BigInt(3) / BigInt(100));
      // 设置有效期（当前时间 + 20分钟）
      const deadline = Math.floor(Date.now() / 1000) + 1200; // 1200秒=20分钟   600秒=10分

      // 2. 授权'代币合约'给'流动性合约'
      const erc20Abi = ["function approve(address spender, uint256 amount)"];
      const tokenContract = new ethers.Contract(add, erc20Abi, signer);
      // 发送授权交易
      const approveTx = await tokenContract.approve(
        LIQUIDITY_CONTRACT_ADDRESS,
        tokenAmount
      );
      await approveTx.wait(); // 等待授权确认
      console.log("代币授权完成");  
      
      // 3. 调用流动性合约
      const liquidityPoolAbi = [
        "function addLiquidityETH(address,uint256,uint256,uint256,address,uint256) payable"
      ];
      const liquidityContract = new ethers.Contract(
        LIQUIDITY_CONTRACT_ADDRESS,
        liquidityPoolAbi,
        signer
      );
      // 发送添加流动性交易
      const tx = await liquidityContract.addLiquidityETH(
        add,       // 代币合约地址
        tokenAmount,        // 期望代币数量
        minTokenAmount,     // 最小接受代币数量（考虑滑点）
        minEthAmount,       // 最小接受ETH数量（考虑滑点）
        sign_address,// 流动性接收地址（用户钱包）
        deadline,           // 交易有效期
        { value: value1 } // 发送的ETH数量
      );
      console.log("交易已发送，哈希：", tx.hash);
      // 等待交易确认
      const receipt = await tx.wait();
      console.log("交易已确认", receipt);
      alert('token is created successful!');
      //2025-02-end
      debugger;
      window.postMessage(
        { source: "inpage", type: "updateAddress", 
          tokenSymbol, add},
        "*"
      );
 
    } catch (error: any) {
      //getAmountsIn 用于计算 获得指定数量输出代币时需要多少输入代币。 比如：你想买1个新发的货币z，  你需要输入多少个eth
      //getAmountsOut 用于计算 卖出指定数量代币时能获得多少输出代币。  比如：你想卖出1个新发的货币z, 你能获取到多少个输出出来的eth
      //所以， getAmountsIn和getAmountsOut的计算结果的单位都是eth
      // console.error("approveAndSwap error", error);
      // if (error instanceof Error) {
      //   if (error.message.includes("insufficient funds")) {
      //     alert("账户余额不足");
      //   } else if (error.message.includes("user rejected transaction")) {
      //     alert("用户取消了交易");
      //   }
      // }
      console.error("创建代币和添加流动性：失败：", error);
      // 处理常见错误
      if (error.code === 'ACTION_REJECTED') {
        alert("用户取消了交易");
      } else if (error.code === 'INSUFFICIENT_FUNDS') {
        alert("余额不足，请检查ETH和代币余额");
      } else {
        alert(`错误：${error.message}`);
      }

      window.postMessage(
        {
          target: "x-wallet-sidepanel2",
          data: {
            success: false,
            msg: error.message,
          },
          id,
        },
        "*"
      );
    }
  }
);











//用户输入想买多少个代币   
//自己方便理解的原理：  1把多少个代币折算成多少eth，2调用swap合约(交换合约)：扣除用户钱包中多少eth， 给用户钱包中新增多少代币
//前端实际的交互代码：  
controller.set(
  "approveAndBuy",
  async (params: { id: string; 
                   data: {
                      wallet: string,nonce:Number, type:string, 
                      tokenSymbol:string, buy_token_number: string, token_address: string} })
        : Promise<void> => {
    console.log('-------------approveAndBuy-------');
    const { id, data } = params;
    const walletDetail = providers.get(data.wallet);
    const tokenSymbol = data.tokenSymbol;
    const buy_token_number = data.buy_token_number;
    const token_address = data.token_address;
    
    if (!walletDetail) {
      window.postMessage(
        {
          target: "x-wallet-sidepanel",
          data: {
            success: false,
            msg: "Wallet Not Found,please connect your wallet!!!",
          },
          id,
        },
        "*"
      );
      return;
    }
    try {
      //debugger;
      //1 获取provider和signer
      // 请求钱包地址和链 ID
      //在部署合约前，请求账户授权
      const accounts = await walletDetail.provider.request({
        method: "eth_requestAccounts",
      });
      const account = Array.isArray(accounts) ? accounts[0] : accounts;
      let chainId = await walletDetail.provider.request({
        method: "eth_chainId",
      });
      // 检查是否为 以太坊 Goerli  测试网（chainId "0x5"）
      // 检查是否为 以太坊 Sepolia 测试网（chainId "0xaa36a7"）
      if (chainId !== "0x3f8bfc2") {
        // 添加测试网
        // await walletDetail.provider.request({
        //   method: "wallet_addEthereumChain",
        //   params: [
        //     {
        //       chainId: "0x3f8bfc2", // 链ID
        //       chainName: "JuChain Testnet", // 测试网名称
        //       nativeCurrency: {
        //         name: "JU",
        //         symbol: "JU",
        //         decimals: 18,
        //       },
        //       rpcUrls: ["https://testnet-rpc.juchain.org"], // RPC地址
        //       blockExplorerUrls: ["https://explorer-testnet.juchain.org/"], // 区块浏览器地址
        //     },
        //   ],
        // });
        // 切换到 Goerli 测试网
        await walletDetail.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x3f8bfc2" }],
        });
        chainId = "0x3f8bfc2";
      }
      // 使用 ethers 的 BrowserProvider 和 Signer
      const provider = new ethers.BrowserProvider(walletDetail.provider);
      const signer = await provider.getSigner();
      const tokenDecimals = 18; // 假设代币精度为18
      
      //1 获取 各方的地址： 代币合约地址add,WETH_ADDRESS地址, sign_address(发币人的钱包地址)
      if (!signer) return alert("please connect wallet!!!");
      const sign_address = await signer.getAddress();
      const WETH_ADDRESS = addressArtifact.WETH9Address;//weth合约地址
      // 部署 ERC20 合约
      // const factory = new ethers.ContractFactory(ERC20Artifact.abi, ERC20Artifact.data.bytecode.object, signer);
      // const initialSupply = ethers.parseUnits('10', tokenDecimals);//ethers.parseUnits(totalSupply, 18)
      // const tokenName = "MyERC30";
      // const tokenSymbol = "ME30";
      // const contract = await factory.deploy(initialSupply,tokenName,tokenSymbol);
      // console.log("部署交易已发送，哈希:", contract.deploymentTransaction()?.hash);
      // await contract.waitForDeployment();
      // const add = await  contract.getAddress();
      const add = token_address;
      //////////////////////////////////////////////上面的都注释掉，改成“从数据库中查询add-代币的合约地址”
      console.log("合约地址:", add);
      // 验证基础信息
      // console.log("代币名称:", await contract.name());
      // console.log("代币符号:", await contract.symbol());
      // console.log("总供应量:", await contract.totalSupply());
      //const add ='0x6b4c1FEA1C2f8Ee03DF64a3eF1d8a1d8e6aC8DBC';
      //2025-01-end 
      // alert(`代币部署成功: ${contract.getAddress()}`);  

      //2 购买几个代币： 
      //2025begin--
      //用户买1个token 这个交易:0, [WETH_ADDRESS, add], sign_address, deadline==>PAYABLE: 
      const minTokens = buy_token_number;
      // 合约配置（根据提供的合约信息）
      const ROUTER_ABI = [
        {
          "inputs": [
            {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"},
            {"internalType": "address[]", "name": "path", "type": "address[]"},
            {"internalType": "address", "name": "to", "type": "address"},
            {"internalType": "uint256", "name": "deadline", "type": "uint256"}
          ],
          "name": "swapExactETHForTokens",
          "outputs": [
            {"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}
          ],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {
              "name": "amountOut",
              "type": "uint256"
            },
            {
              "name": "path",
              "type": "address[]"
            }
          ],
          "name": "getAmountsIn",
          "outputs": [
            {
              "name": "amounts",
              "type": "uint256[]"
            }
          ],
          "payable": false,
          "stateMutability": "view",
          "type": "function"
        }
      ];
       const ROUTER_ADDRESS = addressArtifact.UniswapV2Router02; // 路由合约地址
      //const WETH_ADDRESS = AddressArtifact.WETH9Address;//weth合约地址
      // 创建路由合约实例
      const router = new ethers.Contract(
        ROUTER_ADDRESS,
        ROUTER_ABI,
        signer
      );
      // 构造交易参数
      const path = [WETH_ADDRESS, add]; // 路径必须包含： WETH地址, 代币合约地址
      const deadline2 = Math.floor(Date.now() / 1000) + 60 * 20; // 20分钟有效期
      const requiredTokenAmount = await router.getAmountsIn.staticCall(
        ethers.parseUnits(minTokens, tokenDecimals), 
        path);//买1个token需要多少个eth
      //==>eth_amounts的单位已经是wei
      const eth_amounts = requiredTokenAmount[0];
      console.log('actually need token amount array='+requiredTokenAmount);
      console.log('actually need token amount='+eth_amounts);
      //滑点
      const eth_amounts_slip = (eth_amounts * BigInt(3) / BigInt(100));
      //交易费用
      const eth_amounts_fee = (eth_amounts * BigInt(5) / BigInt(1000));
      //总共需要合约发送多少eth：  
      const value22 = eth_amounts + eth_amounts_slip + eth_amounts_fee;
      // 4. 用户确认
      const ethValueToSend = ethers.formatEther(value22);//将单位从wei改为多少个eth
      //回头研究下plasmo框架下，怎么实现confirm框，先用alert代替
      //if (!window.confirm(`将发送 ${ethValueToSend} ETH 购买代币，确认继续？`)) return;
      alert(`将发送 ${ethValueToSend} ETH 购买代币`);

      // 执行交易
      const tx2 = await router.swapExactETHForTokens(
        ethers.parseUnits(minTokens, tokenDecimals), // minTokens是1
        path,
        sign_address,
        deadline2,
        { value: value22 }
      ); 
      // 等待交易确认
      console.log("买交易已发送，哈希：", tx2.hash);
      // 等待交易确认
      const receipt2 = await tx2.wait();
      console.log("买交易已确认", receipt2);
      //2025end--
      debugger;
        
    } catch (error: any) {
      //getAmountsIn 用于计算 获得指定数量输出代币时需要多少输入代币。 比如：你想买1个新发的货币z，  你需要输入多少个eth
      //getAmountsOut 用于计算 卖出指定数量代币时能获得多少输出代币。  比如：你想卖出1个新发的货币z, 你能获取到多少个输出出来的eth
      //所以， getAmountsIn和getAmountsOut的计算结果的单位都是eth
      // console.error("approveAndSwap error", error);
      // if (error instanceof Error) {
      //   if (error.message.includes("insufficient funds")) {
      //     alert("账户余额不足");
      //   } else if (error.message.includes("user rejected transaction")) {
      //     alert("用户取消了交易");
      //   }
      // }
      console.error("buy-添加流动性，买，卖：失败：", error);
      // 处理常见错误
      if (error.code === 'ACTION_REJECTED') {
        alert("用户取消了交易");
      } else if (error.code === 'INSUFFICIENT_FUNDS') {
        alert("余额不足，请检查ETH和代币余额");
      } else {
        alert(`错误：${error.message}`);
      }

      window.postMessage(
        {
          target: "x-wallet-sidepanel",
          data: {
            success: false,
            msg: error.message,
          },
          id,
        },
        "*"
      );
    }
  }
);








  


//用户输入想卖多少个代币   
//自己方便理解的原理：  1把多少个代币折算成多少eth； 2调用swap合约(交换合约)：扣除用户钱包中多少个代币，给用户钱包中新增多少eth
//前端实际的交互代码：  
controller.set(
  "approveAndSell",
  async (params: { id: string; 
                    data: {
                      wallet: string,nonce:Number, type:string, 
                      tokenSymbol:string, sell_token_number: string, token_address: string} })
        : Promise<void> => {
    console.log('-------------approveAndSell-------');
    const { id, data } = params;
    const walletDetail = providers.get(data.wallet);
    const tokenSymbol = data.tokenSymbol;
    const selle_token_number = data.sell_token_number;
    const token_address = data.token_address;

    if (!walletDetail) {
      window.postMessage(
        {
          target: "x-wallet-sidepanel",
          data: {
            success: false,
            msg: "approveAndSell，Wallet Not Found,please connect your wallet!!!",
          },
          id,
        },
        "*"
      );
      return;
    }
    try {
      //debugger;
      // 请求钱包地址和链 ID
      const accounts = await walletDetail.provider.request({
        method: "eth_requestAccounts",
      });
      const account = Array.isArray(accounts) ? accounts[0] : accounts;
      let chainId = await walletDetail.provider.request({
        method: "eth_chainId",
      });
      // 检查是否为 以太坊 Goerli  测试网（chainId "0x5"）
      // 检查是否为 以太坊 Sepolia 测试网（chainId "0xaa36a7"）
      if (chainId !== "0x3f8bfc2") {
        // // 添加测试网
        // await walletDetail.provider.request({
        //   method: "wallet_addEthereumChain",
        //   params: [
        //     {
        //       chainId: "0x3f8bfc2", // 链ID
        //       chainName: "JuChain Testnet", // 测试网名称
        //       nativeCurrency: {
        //         name: "JU",
        //         symbol: "JU",
        //         decimals: 18,
        //       },
        //       rpcUrls: ["https://testnet-rpc.juchain.org"], // RPC地址
        //       blockExplorerUrls: ["https://explorer-testnet.juchain.org/"], // 区块浏览器地址
        //     },
        //   ],
        // });
        // 切换到 Goerli 测试网
        await walletDetail.provider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x3f8bfc2" }],
        });
        chainId = "0x3f8bfc2";
      }
      // 使用 ethers 的 BrowserProvider 和 Signer
      const provider = new ethers.BrowserProvider(walletDetail.provider);
      const signer = await provider.getSigner();
      const tokenDecimals = 18; // 假设代币精度为18
      
      //const deployToken = async () => {
      if (!signer) return alert("please connect wallet!!!");
      const sign_address = await signer.getAddress();
      // const LIQUIDITY_CONTRACT_ADDRESS = addressArtifact.UniswapV2Router02;
      const WETH_ADDRESS = addressArtifact.WETH9Address;//weth合约地址
      //2025-01-begin
      // 部署 ERC20 合约
      // const factory = new ethers.ContractFactory(ERC20Artifact.abi, ERC20Artifact.data.bytecode.object, signer);
      // const initialSupply = ethers.parseUnits('10', tokenDecimals);//ethers.parseUnits(totalSupply, 18)
      // const tokenName = "MyERC30";
      // const tokenSymbol = "ME30";
      // const contract = await factory.deploy(initialSupply,tokenName,tokenSymbol);
      // console.log("部署交易已发送，哈希:", contract.deploymentTransaction()?.hash);
      // await contract.waitForDeployment();
      // const add = await  contract.getAddress();
      //////////////////////////////////////////////上面的都注释掉，改成“从数据库中查询add-代币的合约地址”
      const add = token_address;
      console.log("合约地址:", add);
      // 验证基础信息
      // console.log("代币名称:", await contract.name());
      // console.log("代币符号:", await contract.symbol());
      // console.log("总供应量:", await contract.totalSupply());
      //const add ='0x6b4c1FEA1C2f8Ee03DF64a3eF1d8a1d8e6aC8DBC';
      //2025-01-end 
      // alert(`代币部署成功: ${contract.getAddress()}`);
      
      debugger;
      //2025start02
      //“卖”交易：
      //用户卖1个token 这个交易: 卖几个token,最多愿意卖几个token, [add,WETH_ADDRESS], sign_address, deadline==>PAYABLE: 
      const amountToSell = selle_token_number;
      // 合约配置（根据提供的合约信息）
      const ROUTER_ABI3 = [
        {
          "inputs": [
            {"internalType": "uint256","name": "amountIn","type": "uint256"},
            {"internalType": "uint256","name": "amountOutMin","type": "uint256"},
            {"internalType": "address[]","name": "path","type": "address[]"},
            {"internalType": "address","name": "to","type": "address"},
            {"internalType": "uint256","name": "deadline","type": "uint256"}
          ],
          "name": "swapExactTokensForETH",
          "outputs": [
            {"internalType": "uint256[]","name": "amounts","type": "uint256[]"}
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "constant": true,
          "inputs": [
            {"name": "amountIn", "type": "uint256"},  // 关键参数名修正
            {"name": "path", "type": "address[]"}
          ],
          "name": "getAmountsOut",  // 使用正确函数名
          "outputs": [
            {"name": "amounts", "type": "uint256[]"}
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ];
       const ROUTER_ADDRESS3 = addressArtifact.UniswapV2Router02; // 路由合约地址
      //const WETH_ADDRESS = AddressArtifact.WETH9Address;//weth合约地址
      // 创建路由合约实例
      const router3 = new ethers.Contract(
        ROUTER_ADDRESS3,
        ROUTER_ABI3,
        signer
      );
      // 构造交易参数
      const path3 = [add, WETH_ADDRESS]; // 路径必须以WETH结尾
      const deadline3 = Math.floor(Date.now() / 1000) + 60 * 20; // 20分钟有效期
      const amountInWei = ethers.parseUnits(amountToSell.toString(), tokenDecimals);
      const account3 = await signer.getAddress();
       
      // 授权代币合约实例
      const tokenContract3 = new ethers.Contract(
        add,
        ["function approve(address spender, uint256 amount) returns (bool)",
        "function allowance(address owner, address spender) view returns (uint256)"],
        signer
      );
      // 授权前先检查实际需要的代币数量 
      const allowance3 = await tokenContract3.allowance(account3, ROUTER_ADDRESS3);
      if (allowance3 < amountInWei) {
        const approveTx33 = await tokenContract3.approve(ROUTER_ADDRESS3, amountInWei);
        await approveTx33.wait();
      }
            
      // 4. 计算预期获得的ETH
      //const path3 = [tokenAddress, WETH_ADDRESS]; // 路径：代币 -> WETH,表示：把新发布的货币token  换成  eth
      const amounts3 = await router3.getAmountsOut.staticCall(amountInWei, path3);//这里表示：用户想卖出1个新发布的货币token， 可以输出得到多少个eth
      const expectedEth = amounts3[amounts3.length - 1];
      // 5. 设置滑点（3%）
      const minEthOut = expectedEth * 97n / 100n; // 使用BigInt计算
      // 2. 执行兑换
      //const ethAmountWei3 = ethers.parseEther('0.0000001');
      const tx3 = await router3.swapExactTokensForETH(
        amountInWei,
        minEthOut,
        path3,
        account3, // ETH接收地址
        deadline3
      );
      // 等待交易确认
      console.log("卖交易已发送，哈希：", tx3.hash);
      // 等待交易确认
      const receipt3 = await tx3.wait();
      console.log("卖交易已确认", receipt3);
      //2025end02

 
    } catch (error: any) {
      //getAmountsIn 用于计算 获得指定数量输出代币时需要多少输入代币。 比如：你想买1个新发的货币z，  你需要输入多少个eth
      //getAmountsOut 用于计算 卖出指定数量代币时能获得多少输出代币。  比如：你想卖出1个新发的货币z, 你能获取到多少个输出出来的eth
      //所以， getAmountsIn和getAmountsOut的计算结果的单位都是eth
      // console.error("approveAndSwap error", error);
      // if (error instanceof Error) {
      //   if (error.message.includes("insufficient funds")) {
      //     alert("账户余额不足");
      //   } else if (error.message.includes("user rejected transaction")) {
      //     alert("用户取消了交易");
      //   }
      // }
      console.error("sell-添加流动性，买，卖：失败：", error);
      // 处理常见错误
      if (error.code === 'ACTION_REJECTED') {
        alert("用户取消了交易");
      } else if (error.code === 'INSUFFICIENT_FUNDS') {
        alert("余额不足，请检查ETH和代币余额");
      } else {
        alert(`错误：${error.message}`);
      }

      window.postMessage(
        {
          target: "x-wallet-sidepanel",
          data: {
            success: false,
            msg: error.message,
          },
          id,
        },
        "*"
      );
    }
  }
);










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
