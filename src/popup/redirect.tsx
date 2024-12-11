import Image from 'next/image'
import { ThemeProvider } from '~/components/theme-provider'
import mainBg from 'url:@/assets/main-bg.png'
import xButton from 'url:@/assets/x-button.png'
import mainIcon from 'data-base64:@/assets/main-icon.png'

const Redirect = ({ isX }: { isX: boolean }) => {
  const goToX = () => {
    chrome.tabs.create({ url: 'https://x.com' });
  }
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
      <div
        className='w-[421px] h-[600px] px-[90px] overflow-hidden'
        style={{
          backgroundImage: `url(${mainBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Image
          src={mainIcon}
          width={240}
          height={296}
          alt='icon'
          className='mt-[94px]'
        ></Image>
        <div className='flex flex-col items-center justify-center mt-[88px]'>
          {/* <Image src={icon} width={160} height={160} alt='icon'></Image> */}
          <div
            className='w-[299px] h-[46px] text-xl text-center leading-[46px] cursor-pointer'
            onClick={() => {
              !isX && goToX()
            }}
            style={{
              backgroundImage: `url(${xButton})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {isX ? 'Login in side-panel' : 'Login by X'}
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Redirect
