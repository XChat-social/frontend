import React from 'react'
import PixelButton from '../components/PixelButton'
import Image from 'next/image'

const PixelIcon = ({
  color = '#adff2f',
  imageUrl,
}: {
  color?: string
  imageUrl?: string
}) =>
  imageUrl ? (
    <Image src={imageUrl} alt='Icon' width={60} height={60} className='mr-2' />
  ) : (
    <svg width='60' height='60' viewBox='0 0 6 6' className='mr-2'>
      <rect width='6' height='6' fill={color} />
      <rect x='1' y='1' width='1' height='1' fill='white' fillOpacity='0.5' />
      <rect x='1' y='4' width='1' height='1' fill='black' fillOpacity='0.3' />
    </svg>
  )

const Store = () => {
  const handleWalletClick = () => console.log('My Wallet clicked')
  const handleSwap = () => console.log('Swap button clicked')

  return (
    <div className='text-white mx-[24px] font-mono'>
      <div className='flex justify-end mb-[52px]'>
        <PixelButton
          onClick={handleWalletClick}
          backgroundColor='#adff2f'
          width={153}
          height={44}
        >
          My Wallet
        </PixelButton>
      </div>

      <div className='flex justify-between mb-[37px]'>
        <div className='bg-gray-800 rounded-[10px] w-[200px] h-[115px] flex flex-col items-center'>
          <div className='mt-[-30px]'>
            <PixelIcon />
          </div>
          <span className='text-sm mt-[8px]'>XCoin</span>
          <div className='text-xl text-[#BCF804]'>65.00</div>
        </div>
        <div className='bg-gray-800 rounded-[10px] w-[200px] h-[115px] flex flex-col items-center'>
          <div className='flex items-center mb-1 mt-[-30px]'>
            <PixelIcon />
          </div>
          <span className='text-sm mt-[8px]'>XPoint</span>
          <div className='text-xl text-[#BCF804]'>328.00</div>
        </div>
      </div>

      <div className='bg-gray-800 p-3 rounded-[10px] flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-[48px] h-[48px] bg-[#adff2f] rounded-full'></div>
          <div className='ml-[16px] flex flex-col'>
            <span className='text-sm mr-2'>XCoin</span>
            <span className='text-sm'>500XPoint</span>
          </div>
        </div>
        <div className='w-[77px] h-[34px] bg-[#BCF804] rounded-[22px] px-[14px] py-[5px] cursor-pointer text-lg text-black text-center'>
          Swap
        </div>
      </div>
    </div>
  )
}

export default Store
