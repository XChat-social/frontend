import React from 'react'
import PixelButton from '../components/PixelButton'

const StateDualButton: React.FC<{
  state: number
  setState: React.Dispatch<React.SetStateAction<1 | 2 | 3>>
  onOpenDiscountDialog: () => void
  onOpenInvitationCodeInput: () => void
  onOpenDeleteFriendConfirmation: () => void

  onOpenBuyKeysDialoge: () => void
  onOpenSellKeysDialoge: () => void
}> = ({
  state,
  setState,
  onOpenDiscountDialog,
  onOpenInvitationCodeInput,
  onOpenDeleteFriendConfirmation,

  onOpenBuyKeysDialoge,
  onOpenSellKeysDialoge,
}) => {
    const handleLeftClick = () => {
      onOpenBuyKeysDialoge();
    }

    const handleRightClick = () => {
      onOpenSellKeysDialoge();
    }
    // const handleLeftClick = () => {
    //   if (state === 3) {
    //     onOpenDeleteFriendConfirmation()
    //   } else {
    //     setState((prevState) => ((prevState % 3) + 1) as 1 | 2 | 3)
    //   }
    // }

    // const handleRightClick = () => {
    //   if (state === 2) {
    //     onOpenDeleteFriendConfirmation()
    //   } else if (state !== 3) {
    //     setState((prevState) => ((prevState % 3) + 1) as 1 | 2 | 3)
    //   }
    // }

    const getButtonProps = () => {
      switch (state) {
        case 1:
          return {
            left: {
              backgroundColor: 'transparent',
              textColor: '#BCF804',
              children: 'BUY TOKENS',
              width: 208,
              height: 61,
            },
            right: {
              backgroundColor: '#adff2f',
              textColor: '#000000',
              children: 'SELL TOKENS',
              width: 208,
              height: 61,
            },
          }
        // return {
        //   left: {
        //     backgroundColor: 'transparent',
        //     textColor: '#BCF804',
        //     children: 'Buy Keys',
        //     width: 208,
        //     height: 61,
        //   },
        //   right: {
        //     backgroundColor: '#adff2f',
        //     textColor: '#000000',
        //     children: 'Add to Contact',
        //     width: 208,
        //     height: 61,
        //   },
        // }
        case 2:
          return {
            left: {
              backgroundColor: 'transparent',
              textColor: '#BCF804',
              children: 'Buy Keys',
              width: 208,
              height: 61,
            },
            right: {
              backgroundColor: '#ff00ff',
              textColor: '#ffffff',
              children: 'Delete',
              width: 208,
              height: 61,
            },
          }
        case 3:
          return {
            left: {
              backgroundColor: '#adff2f',
              textColor: '#000000',
              children: 'Get an Invitation Code?',
              width: 331,
              height: 61,
            },
            right: {
              backgroundColor: '#adff2f',
              textColor: '#000000',
              children: '',
              width: 0,
            },
          }
        default:
          return {
            left: {
              backgroundColor: 'transparent',
              textColor: '#BCF804',
              children: 'Default',
              width: 208,
              height: 61,
            },
            right: {
              backgroundColor: '#adff2f',
              textColor: '#000000',
              children: 'Default',
              width: 208,
              height: 61,
            },
          }
      }
    }

    const buttonProps = getButtonProps()

    return (
      <div className='flex items-center justify-center bg-gray-800 h-[93px]'>
        {state === 3 ? (
          <PixelButton onClick={handleLeftClick} {...buttonProps.left} />
        ) : (
          <div className='flex items-center justify-between w-full px-[24px]'>
            <PixelButton onClick={handleLeftClick} {...buttonProps.left} />
            <PixelButton onClick={handleRightClick} {...buttonProps.right} />
          </div>
        )}
      </div>
    )
  }

export default StateDualButton
