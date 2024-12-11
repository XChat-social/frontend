import React, { useState } from 'react'
import PixelButton from './PixelButton'
import DialogImage from 'data-base64:@/assets/dialog-bg.png'

interface InvitationCodeInputProps {
  onSubmit: (code: string) => void
  onCancel: () => void
  isOpen: boolean
}

const InvitationCodeInput: React.FC<InvitationCodeInputProps> = ({
  onSubmit,
  onCancel,
  isOpen,
}) => {
  const [code, setCode] = useState('')

  if (!isOpen) return null

  const handleSubmit = () => {
    onSubmit(code)
    setCode('')
  }

  return (
    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div
        className='w-[373px] h-[236px] rounded-lg overflow-hidden'
        style={{
          backgroundImage: `url(${DialogImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='px-6 py-8'>
          <h2 className='text-[#adff2f] text-xl font-pixel mb-4'>
            YOUR INVITATION CODE IS:
          </h2>
          <input
            type='text'
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder='Input invitation Code here'
            className='w-full bg-[#ffffff] text-[#626262] p-3 mb-6 font-mono rounded'
          />
          <div className='flex justify-center'>
            <PixelButton
              onClick={handleSubmit}
              backgroundColor='#adff2f'
              textColor='#000000'
              width={151}
              height={44}
            >
              Confirm
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvitationCodeInput
