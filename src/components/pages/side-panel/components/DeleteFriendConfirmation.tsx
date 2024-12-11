import React from 'react'
import PixelButton from './PixelButton'
import FriendDeleteDialogImage from 'data-base64:@/assets/friend-dialog.png'

interface DeleteFriendConfirmationProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

const DeleteFriendConfirmation: React.FC<DeleteFriendConfirmationProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null

  return (
    <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
      <div
        className='w-[373px] h-[276px] rounded-lg overflow-hidden'
        style={{
          backgroundImage: `url(${FriendDeleteDialogImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='px-[24px] h-full flex flex-col'>
          <div>
            <h2 className='text-[#adff2f] text-2xl font-pixel mt-[29px] text-center'>
              DELETE FRIENDS
            </h2>
            <p className='text-white text-[20px] text-center mt-[24px]'>
              Do you confirm to DELETE this friends?
            </p>
          </div>
          <div className='flex justify-between mt-[54px]'>
            <PixelButton
              onClick={onCancel}
              backgroundColor='#adff2f'
              textColor='#000000'
              width={151}
              height={44}
            >
              Cancel
            </PixelButton>
            <PixelButton
              onClick={onConfirm}
              backgroundColor='#ff00ff'
              textColor='#ffffff'
              width={151}
              height={44}
            >
              Delete
            </PixelButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteFriendConfirmation
