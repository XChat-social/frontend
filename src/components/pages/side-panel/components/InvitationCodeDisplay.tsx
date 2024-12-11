import React from 'react'
import PixelButton from './PixelButton'
import DialogImage from 'data-base64:@/assets/dialog-bg.png'

interface InvitationCodeDisplayProps {
  code: string
  isOpen: boolean
  onClose: () => void
}

const InvitationCodeDisplay: React.FC<InvitationCodeDisplayProps> = ({
  code,
  isOpen,
  onClose,
}) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        // 复制成功后关闭弹窗
        onClose()
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }

  if (!isOpen) return null

  return (
    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div
        className='px-[24px] w-[373px] h-[236px] bg-black rounded-lg'
        style={{
          backgroundImage: `url(${DialogImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h2 className='text-[#adff2f] text-xl font-pixel mt-[33px]'>
          YOUR INVITATION CODE IS:
        </h2>
        <input
          type='text'
          value={code}
          readOnly
          tabIndex={-1}
          className='w-full bg-[#ffffff] text-[#626262] p-[13px] mt-[10px] font-mono rounded pointer-events-none'
        />
        <div className='flex justify-center mt-[45px]'>
          <PixelButton
            onClick={handleCopy}
            backgroundColor='#adff2f'
            textColor='#000000'
            width={151}
            height={44}
          >
            Copy
          </PixelButton>
        </div>
      </div>
    </div>
  )
}

export default InvitationCodeDisplay
