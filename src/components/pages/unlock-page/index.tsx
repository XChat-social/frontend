import React, { useState } from 'react'
import { useStorage } from '@plasmohq/storage/hook'
import { ThemeProvider } from '~/components/theme-provider'
// import { Button } from '~/components/ui/button'
import icon from 'data-base64:@/assets/main-icon.png'
import Image from 'next/image'
import { WindowPostMessage } from '~/lib/wpm'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { InfoCircledIcon, CheckCircledIcon } from '@radix-ui/react-icons'
import xButtonImage from 'data-base64:@/assets/x-button.png'
import okxButtonImage from 'data-base64:@/assets/okx-button.png'
import bitgetButtonImage from 'data-base64:@/assets/metamask-button.png'
import mainBg from 'data-base64:@/assets/main-bg.png'
//grpc
import { BusinessExtClient } from '~/components/pages/unlock-page/business.ext_grpc_web_pb'; // 服务类
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'; // 使用 google.protobuf.Empty
import 'xhr2'; // 确保在 Node.js 环境中支持 XMLHttpRequest

// Ensure XMLHttpRequest is available in the Node.js environment
if (typeof XMLHttpRequest === 'undefined') {
  global.XMLHttpRequest = require('xhr2');
}

const getTwitterAuthorizeURL = () => {
  const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
  // 创建空请求对象
  const request = new Empty();
  // 调用服务方法
  client.getTwitterAuthorizeURL(request, {}, (err, response) => {
    if (err) {
      console.error('Error:', err.message);
    } else {
      console.log('1Response:', response.toObject());
      chrome.runtime.sendMessage({ action: 'createTab', url: response.toObject().url });
    }
  });
}
//grpc-end

const nonce = 0

// tab 发送 钱包连接请求 content 可以实现钱包登陆么 优先使用eip-6963 获取provider并登陆
// tab 发送 钱包登陆请求
const UnlockPage = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState('')
  const [account, setAccount] = useStorage('account')
  const request = new WindowPostMessage({
    name: 'x-wallet-sidepanel',
    target: 'x-wallet-inpage',
  })

  //grpc接口-begin
  // 定义接口响应的数据结构
  // interface TwitterAuthorizeURLResp {
  //   url: string;
  // }
  // const [authUrl, setAuthUrl] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  // type RPCImplCallback = (error: (Error | null), response?: (Uint8Array | null)) => void;
  // // 定义符合RPCImpl类型的实际函数
  // function rpcImpl(method: (Method | rpc.ServiceMethod<Message<{}>, Message<{}>>), requestData: Uint8Array, callback: RPCImplCallback): void {
  //   //const url = 'http://13.61.35.52:8020';       //http应该改成https
  //   //const url = 'https://api.xchat.social/api';  //跨域错误
  //   //const url = 'https://api.xchat.social:443';
  //   const url = 'https://api.xchat.social/business-web';
  //   // 根据method等信息构建请求选项，比如设置请求方法、请求头、请求体等
  //   const requestOptions: RequestInit = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/octet-stream'
  //     },
  //     body: requestData
  //   };

  //   fetch(url, requestOptions)
  //     .then(response => response.arrayBuffer())
  //     .then(buffer => {
  //       const resultData = new Uint8Array(buffer);
  //       callback(null, resultData);
  //     })
  //     .catch(error => {
  //       callback(error, null);
  //     });
  // }
  // // 请求 Twitter 授权 URL 的方法
  // const getTwitterAuthorizeURL = () => {
  //   setLoading(true);
  //   setError(null);
  //   alert(9);
  //   // 创建一个 gRPC 客户端，调用 GetTwitterAuthorizeURL 方法
  //   //const client = new pb.BusinessExt(rpcImpl, false, false);
  //   const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);

  //   // 创建一个 rpcImpl 实现，指定后端服务器的 URL
  //   // const rpcImpl: grpc.RpcImpl = grpc.invoke; 
  //   // // 创建 gRPC 客户端，传入 rpcImpl
  //   // const client = new pb.BusinessExt(rpcImpl, 'http://13.61.35.52:8020', {
  //   //     transport: grpc.WebsocketTransport(),
  //   // });
  //   client.getTwitterAuthorizeURL({}, (err: any, response: any) => {
  //     setLoading(false);
  //     //alert('url2=' + response.url);
  //     if (err) {
  //       console.log("err=" + err);
  //       console.log("response=" + response);
  //       alert('err=' + err);
  //       //setError('Error: ' + err.message);
  //     } else {
  //       alert('url=' + response.url);
  //       setAuthUrl(response.url); // 假设返回的对象中有一个 url 字段
  //     }
  //   });
  // };
  //grpc接口-end


  const requestXLogin = async () => {
    try {
      chrome.runtime.sendMessage({ action: 'createTab', url: 'https://twitter.com/i/oauth2/authorize?response_type=code&client_id=ZUIteDdNQkVENDZsUWpJWFA1dWw6MTpjaQ&redirect_uri=http%3A%2F%2F13.61.35.52%3A8080%2Ftwitter%2Fsignin&scope=tweet.read users.read&state=FWSfYbie4_QaLOXQ&code_challenge=9H06iCwWsfXoYGhk2SrjTl-HP1C5GuNVFZPCZP2QZXs&code_challenge_method=S256' });
      // const result = await request.send({
      //   method: 'requestLogin',
      //   data: {
      //     wallet,
      //     nonce,
      //     type: 'wallet',
      //   },
      // })
      // storage 不生效
      // setAccount(result.data)
      // setSuccess(result.data)
      // setTimeout(() => {
      //   setSuccess('')
      // }, 5000)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message || '操作失败')
      } else if (
        typeof error === 'object' &&
        error !== null &&
        'msg' in error
      ) {
        setErrorMsg((error as { msg: string }).msg || '操作失败')
      } else {
        setErrorMsg('操作失败')
      }
      setTimeout(() => {
        setErrorMsg('')
      }, 5000)
    }
  }

  const requestWalletLogin = async (wallet: string) => {
    try {
      const result = await request.send({
        method: 'requestLogin',
        data: {
          wallet,
          nonce,
          type: 'wallet',
        },
      })
      // storage 不生效
      setAccount(result.data)
      setSuccess(result.data)
      setTimeout(() => {
        setSuccess('')
      }, 5000)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message || '操作失败')
      } else if (
        typeof error === 'object' &&
        error !== null &&
        'msg' in error
      ) {
        setErrorMsg((error as { msg: string }).msg || '操作失败')
      } else {
        setErrorMsg('操作失败')
      }
      setTimeout(() => {
        setErrorMsg('')
      }, 5000)
    }
  }

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
      <div
        className='w-[504px] h-screen relative flex flex-col items-center bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${mainBg})` }}
      >
        <Image
          src={icon}
          width={200}
          height={200}
          alt='icon'
          className='mt-[20%]'
        />
        <div className='mt-[40px] w-[373px] h-[58px] relative cursor-pointer'
          onClick={() => getTwitterAuthorizeURL()}>
          <Image
            src={xButtonImage}
            width={373}
            height={58}
            alt='Login by X'
            className='cursor-pointer'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-[#000000] font-semibold'>Login by X</span>
          </div>
        </div>
        <div
          className='mt-[20px] w-[373px] h-[58px] relative cursor-pointer'
          onClick={() => requestWalletLogin('OKX Wallet')}
        >
          <Image
            src={okxButtonImage}
            width={373}
            height={58}
            alt='Login by OKX Wallet'
            className='cursor-pointer'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-[#ffffff] font-semibold'>
              Login by OKX Wallet
            </span>
          </div>
        </div>
        <div
          className='mt-[20px] w-[373px] h-[58px] relative cursor-pointer'
          onClick={() => requestWalletLogin('Bitget Wallet')}
        >
          <Image
            src={bitgetButtonImage}
            width={373}
            height={58}
            alt='Login by Bitget Wallet'
            className='cursor-pointer'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-[#000000] font-semibold'>
              Login by Bitget Wallet
            </span>
          </div>
        </div>

        {success && (
          <Alert variant='success' className='mt-auto mx-auto mb-2 w-[90%]'>
            <CheckCircledIcon className='h-4 w-4' />
            <AlertTitle>登录成功</AlertTitle>
            <AlertDescription>{success}</AlertDescription>
          </Alert>
        )}

        {errorMsg && (
          <Alert variant='destructive' className='mt-auto mx-auto mb-2 w-[90%]'>
            <InfoCircledIcon className='h-4 w-4' />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMsg}</AlertDescription>
          </Alert>
        )}
      </div>
    </ThemeProvider>
  )
}

export default UnlockPage
