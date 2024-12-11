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
          onClick={() => requestXLogin()}>
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
