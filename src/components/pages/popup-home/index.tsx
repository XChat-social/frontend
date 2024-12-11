import React from 'react'
import { ThemeProvider } from '~/components/theme-provider'
import ChainSelect from './chain-select'
import User from './user'
import PixelButton from '~/components/pages/side-panel/components/PixelButton'
import BalanceGroup from './BalanceGroup'

function Home() {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <div className='w-[421px] h-[600px] relative text-center bg-black text-sm overflow-hidden'>
        <div className='flex items-center justify-between mt-[34px] px-[23px]'>
          <ChainSelect />
          <PixelButton
            backgroundColor='#adff2f'
            textColor='#000000'
            width={126}
            height={36}
          >
            Invite Friends
          </PixelButton>
        </div>
        <div className='flex items-center justify-center mt-[33px]'>
          <User />
        </div>
        <div className='flex items-center justify-center mt-[23px]'>
          <BalanceGroup />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default Home
