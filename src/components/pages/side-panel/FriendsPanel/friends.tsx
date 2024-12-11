import React from 'react'
import Image from 'next/image'
import friendsKeyIcon from 'data-base64:@/assets/friends-key.png'

const FriendItem = ({
  name,
  avatar,
  lastMessage,
  isVerified,
}: {
  name: string
  avatar: string | null
  lastMessage: string
  isVerified: boolean
}) => (
  <div className='flex items-center p-3 bg-gray-800 rounded-lg mb-[26px] cursor-pointer'>
    <div className='w-12 h-12 rounded-full overflow-hidden mr-3'>
      {avatar ? (
        <Image
          src={avatar}
          alt={name}
          width={75}
          height={75}
          className='w-full h-full object-cover'
        />
      ) : (
        <div className='w-full h-full bg-gray-600' />
      )}
    </div>
    <div className='flex-grow'>
      <h3 className='text-white font-semibold'>{name}</h3>
      <p className='text-gray-400 text-sm'>Last message...</p>
    </div>
    {isVerified && (
      <div className='w-[59px] h-[59px] flex items-center justify-center'>
        <Image
          src={friendsKeyIcon}
          alt='Verified Friend'
          width={59}
          height={59}
        />
      </div>
    )}
  </div>
)

const Friends = () => {
  const friends = [
    {
      name: 'Anna Hooper',
      avatar: null,
      isVerified: true,
    },
    {
      name: 'Adam Yagh',
      avatar: null,
      isVerified: true,
    },
    { name: 'Bruse Swan', avatar: null, isVerified: false },
    {
      name: 'Emma Yaoo',
      avatar: null,
      isVerified: true,
    },
    { name: 'Anna Hooper', avatar: null, isVerified: false },
  ]

  return (
    <div className='mx-[24px]'>
      {friends.map((friend, index) => (
        <FriendItem key={index} {...friend} lastMessage='Last message...' />
      ))}
    </div>
  )
}

export default Friends
