import type {
  PlasmoCSConfig,
  PlasmoGetOverlayAnchor,
  PlasmoGetShadowHostId,
  PlasmoWatchOverlayAnchor,
} from 'plasmo'
import Tab from '~/components/pages/tab'
import cssText from 'data-text:~/styles/globals.css'
import icon from 'data-base64:../../assets/icon.png'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import { useState } from 'react'

type Async<T> = Promise<T> | T

export const getStyle = () => {
  const style = document.createElement('style')
  style.textContent = cssText.replaceAll(':root', ':host(plasmo-csui)')
  return style
}

export const config: PlasmoCSConfig = {
  matches: ['https://x.com/*'],
}

export const getOverlayAnchor: PlasmoGetOverlayAnchor = async () =>
  document.querySelector('[role="main"]') as Async<HTMLElement>

export const watchOverlayAnchor: PlasmoWatchOverlayAnchor = (
  updatePosition,
) => {
  const interval = setInterval(() => {
    updatePosition()
  }, 8472)

  // Clear the interval when unmounted
  return () => {
    clearInterval(interval)
  }
}

export const getShadowHostId: PlasmoGetShadowHostId = () => `xchat-main`

const TwitterTab = () => {
  const [isToggle, setIsToggle] = useState(false)

  if (isToggle)
    return (
      <div className='flex fixed top-0 right-0'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            width: '30px',
            height: '34px',
            backgroundColor: '#ffffff',
            borderRadius: '20px 0 0 20px',
            marginTop: 50,
          }}
          className='opacity-50 hover:opacity-100'
          onClick={() => setIsToggle(!isToggle)}
        >
          <ChevronRightIcon className='h-6 w-6 text-bold ml-1 text-black' />
        </div>
        <Tab />
      </div>
    )
  return (
    <div
      style={{
        position: 'fixed',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        top: 150,
        right: 0,
        width: '38px',
        height: '34px',
        backgroundColor: '#ffffff',
        borderRadius: '20px 0 0 20px',
        transition: 'opacity 0.2s ease-in-out',
      }}
      className='opacity-50 hover:opacity-100'
      onClick={() => setIsToggle(!isToggle)}
    >
      <Image src={icon} width={28} height={28} alt='icon'></Image>
    </div>
  )
}

export default TwitterTab
