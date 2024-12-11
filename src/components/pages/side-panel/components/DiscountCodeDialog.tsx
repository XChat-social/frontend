import React, { useState } from 'react'
import PixelButton from './PixelButton'
import DialogImage from 'data-base64:@/assets/dialog-bg.png'

interface DiscountCodeDialogProps {
  onSubmit: (code: string) => void
  onCancel: () => void
  isOpen: boolean // 添加这一行
}

const DiscountCodeDialog: React.FC<DiscountCodeDialogProps> = ({
  onSubmit,
  onCancel,
  isOpen,
}) => {
  const [discountCode, setDiscountCode] = useState('')

  const handleSubmit = () => {
    onSubmit(discountCode)
  }

  if (!isOpen) return null

  return (
    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div
        className='px-[24px] w-[373px] h-[236px] rounded-lg max-w-md'
        style={{
          backgroundImage: `url(${DialogImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className='text-[#adff2f] text-xl mt-[33px] font-pixel'>
          DO YOU HAVE DISCOUNT CODE?
        </h2>
        <input
          type='text'
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder='Input Discount Code here'
          className='w-full h-[49px] bg-gray-700 text-white p-[13px] mt-[10px] rounded'
        />
        <div className='flex justify-between mt-[45px]'>
          <PixelButton
            onClick={handleSubmit}
            backgroundColor='#adff2f'
            textColor='#000000'
            width={151}
            height={44}
          >
            Yes
          </PixelButton>
          <PixelButton
            onClick={onCancel}
            backgroundColor='#ff00ff'
            textColor='#ffffff'
            width={151}
            height={44}
          >
            No
          </PixelButton>
        </div>
      </div>
    </div>
  )
}

export default DiscountCodeDialog
