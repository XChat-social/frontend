import React from 'react'
import { ThemeProvider } from './theme-provider'
import { Button } from './ui/button'
import icon from 'data-base64:@/assets/icon.png'
import Image from 'next/image'

// tab 发送 钱包连接请求 content 可以实现钱包登陆么 优先使用eip-6963 获取provider并登陆
// tab 发送 钱包登陆请求
const MainTab = () => {
  const requestWalletLogin = (wallet: string) => {
    window.postMessage({
      target: 'x-wallet-inpage',
      params: {
        method: 'requestLogin',
        data: wallet,
      },
    })
  }

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
      <div className='w-[372px] h-screen relative flex flex-col items-center bg-[#ffffff] dark:bg-black'>
        <h1 className='text-xl mt-2 text-[#07577A] dark:text-[#fff]'>
          Welcome to XChat!
        </h1>
        <Image
          src={icon}
          width={200}
          height={200}
          alt='icon'
          className='mt-[20%]'
        />
        <Button className='w-4/5 rounded-full h-12 text-xl mt-[40px]'>
          Login by X
        </Button>
        <div className='flex justify-center items-center mt-[20px]'>
          <div className='h-0 w-10 border-b border-b-[#cccccc]'></div>
          <div className='mx-4 text-xl text-[#cccccc]'>OR</div>
          <div className='h-0 w-10 border-b border-b-[#cccccc]'></div>
        </div>
        <Button
          className='w-4/5 rounded-full h-12 text-xl mt-[20px]'
          onClick={() => requestWalletLogin('OKX Wallet')}
        >
          Login by OKX Wallet
        </Button>
        <Button
          className='w-4/5 rounded-full h-12 text-xl mt-[20px]'
          onClick={() => requestWalletLogin('Bitget Wallet')}
        >
          Login by Bitget Wallet
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default MainTab
