import React from 'react'
import { Avatar } from '~/components/ui/avatar'
import Image from 'next/image'
import EthIcon from 'data-base64:@/assets/eth-icon.png'
import XChatIcon from 'data-base64:@/assets/xchat-logo.png'

const TokenRow = ({
  icon,
  name,
  amount,
  value,
}: {
  icon: string
  name: string
  amount: string
  value: string
}) => (
  <div className='flex items-center justify-between w-[376px] h-[61px] bg-gray-800 rounded-lg px-[15px] py-[11px] mb-[13px]'>
    <div className='flex items-center'>
      <Avatar>
        <Image src={icon} width={39} height={39} alt={name} />
      </Avatar>
      <div className='flex flex-col items-start ml-[15px]'>
        <span className='text-white font-semibold'>{name}</span>
        <span className='text-gray-400 text-sm'>{amount}</span>
      </div>
    </div>
    <span className='text-white'>${value}</span>
  </div>
)

const BalanceGroup = () => {
  const tokens = [
    { icon: XChatIcon, name: 'XChat', amount: '0', value: '0' },
    {
      icon: EthIcon,
      name: 'ETH',
      amount: '0.0256',
      value: '76.8',
    },
  ]

  return (
    <div>
      <h2 className='text-white text-xl text-start font-bold mb-[11px]'>
        Tokens
      </h2>
      {tokens.map((token, index) => (
        <TokenRow key={index} {...token} />
      ))}
    </div>
  )
}

export default BalanceGroup
