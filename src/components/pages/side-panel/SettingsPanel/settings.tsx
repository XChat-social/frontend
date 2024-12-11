import React, { useState } from 'react'
import Image from 'next/image'
import MoreIcon from 'data-base64:@/assets/more.png'
import EthIcon from 'data-base64:@/assets/eth.png'
import StateDualButton from './StateDualButton'
import DiscountCodeDialog from '../components/DiscountCodeDialog'
import InvitationCodeDisplay from '../components/InvitationCodeDisplay'
import InvitationCodeInput from '../components/InvitationCodeInput'
import DeleteFriendConfirmation from '../components/DeleteFriendConfirmation'

const ProfileHeader: React.FC<{ src?: string }> = ({ src = '' }) => (
  <div className='flex items-center mb-[14px]'>
    <div className='bg-green-400 rounded-lg overflow-hidden flex items-center justify-center'>
      <Image src={src} width={151} height={167} alt='Profile' />
    </div>
    <div className='flex-grow ml-[35px]'>
      <h2 className='text-xl font-bold'>Anna Hopper</h2>
      <p className='text-gray-400 mt-[4px]'>@AnnaHooper_eth</p>
      <button className='mt-[28px] w-[134px] h-[29px] bg-[#BCF804] text-black rounded-[9px] text-sm text-center leading-[29px]'>
        Edit Profile
      </button>
    </div>
  </div>
)

const FollowingSection: React.FC = () => {
  const following = [
    { name: 'Adam Yaghi', avatar: '' },
    { name: 'Emma Yaoo', avatar: '' },
    { name: 'Kathy Rodrigo', avatar: '' },
    { name: 'John Doe', avatar: '' },
    { name: 'Jane Smith', avatar: '' },
  ]

  return (
    <>
      <h3 className='mb-[7px] text-[24px] font-bold'>Following</h3>
      <div className='flex mb-4 cursor-pointer'>
        {following.slice(0, 3).map((user, index) => (
          <div
            key={index}
            className='w-[78px] h-[78px] bg-gray-600 rounded-full mr-[45px] overflow-hidden'
          >
            <Image
              src={user.avatar}
              width={78}
              height={78}
              alt={user.name}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
        {following.length > 3 && (
          <div className='w-[78px] h-[78px] rounded-full cursor-pointer flex items-center justify-center'>
            <Image
              src={MoreIcon}
              width={78}
              height={78}
              alt='More'
              className='w-full h-full object-cover'
            />
          </div>
        )}
      </div>
    </>
  )
}

const InfoBox: React.FC<{ value: string }> = ({ value }) => (
  <div className='bg-[#253341] mb-[28px] w-[456px] h-[57px] rounded-[10px] text-[color: rgba(255,255,255,0.8);] text-[22px] text-center leading-[57px]'>
    <p>{`${value} Key followers`}</p>
  </div>
)

const CurrentBidSection: React.FC<{ state: number }> = ({ state }) =>
  state !== 3 ? (
    <div className='mb-[6px] px-[24px]'>
      <div className='flex items-center mb-[7px] text-[#AAB8C2] text-lg'>
        Current Bid
      </div>
      <div className='flex items-center mb-2'>
        <Image src={EthIcon} width={18} height={29} alt='ETH' />
        <span className='ml-[8px] text-lg text-[#F5F8FA] font-bold'>
          0,039 ETH
        </span>
      </div>
    </div>
  ) : null

const ProfileCard: React.FC = () => {
  return (
    <div className='bg-black text-white rounded-lg max-w-md'>
      <ProfileHeader />
      <p className='mb-[21px] text-sm text-white'>
        Anna is a highly skilled cryptocurrency investor known for her
        exceptional returns. With a sharp understanding of market trends and a
        unique perspective on various domains, including blockchain, DeFi, and
        NFTs.
      </p>
      <InfoBox value='223' />
      <FollowingSection />
    </div>
  )
}

const Settings: React.FC = () => {
  const [state, setState] = useState<1 | 2 | 3>(1)
  const [isDiscountDialogOpen, setIsDiscountDialogOpen] = useState(false)
  const [isInvitationCodeOpen, setIsInvitationCodeOpen] = useState(false)
  const [isInvitationCodeInputOpen, setIsInvitationCodeInputOpen] =
    useState(false)
  const [isDeleteFriendConfirmationOpen, setIsDeleteFriendConfirmationOpen] =
    useState(false)

  const onOpenDiscountDialog = () => {
    setIsDiscountDialogOpen(true)
  }

  const handleDiscountSubmit = (code: string) => {
    console.log('Discount code submitted:', code)
    setIsDiscountDialogOpen(false)
  }

  const handleDiscountCancel = () => {
    setIsDiscountDialogOpen(false)
  }

  const onOpenInvitationCode = () => {
    setIsInvitationCodeOpen(true)
  }

  const handleInvitationCodeClose = () => {
    setIsInvitationCodeOpen(false)
  }

  const onOpenInvitationCodeInput = () => {
    setIsInvitationCodeInputOpen(true)
  }

  const handleInvitationCodeInputSubmit = (code: string) => {
    console.log('Invitation code submitted:', code)
    setIsInvitationCodeInputOpen(false)
  }

  const handleInvitationCodeInputCancel = () => {
    setIsInvitationCodeInputOpen(false)
  }

  const onOpenDeleteFriendConfirmation = () => {
    setIsDeleteFriendConfirmationOpen(true)
  }

  const handleDeleteFriendConfirm = () => {
    console.log('Friend deleted')
    setIsDeleteFriendConfirmationOpen(false)
  }

  const handleDeleteFriendCancel = () => {
    setIsDeleteFriendConfirmationOpen(false)
  }

  return (
    <div className='flex flex-col h-[100%]'>
      <div className='flex-grow px-[24px]'>
        <ProfileCard />
      </div>
      <CurrentBidSection state={state} />
      <StateDualButton
        state={state}
        setState={setState}
        onOpenDiscountDialog={onOpenDiscountDialog}
        onOpenInvitationCodeInput={onOpenInvitationCodeInput}
        onOpenDeleteFriendConfirmation={onOpenDeleteFriendConfirmation}
      />
      <DiscountCodeDialog
        isOpen={isDiscountDialogOpen}
        onSubmit={handleDiscountSubmit}
        onCancel={handleDiscountCancel}
      />
      <InvitationCodeDisplay
        code='ABCD1234567890'
        isOpen={isInvitationCodeOpen}
        onClose={handleInvitationCodeClose}
      />
      <InvitationCodeInput
        isOpen={isInvitationCodeInputOpen}
        onSubmit={handleInvitationCodeInputSubmit}
        onCancel={handleInvitationCodeInputCancel}
      />
      <DeleteFriendConfirmation
        isOpen={isDeleteFriendConfirmationOpen}
        onConfirm={handleDeleteFriendConfirm}
        onCancel={handleDeleteFriendCancel}
      />
    </div>
  )
}

export default Settings
