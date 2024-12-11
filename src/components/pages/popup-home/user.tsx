import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { copy } from '~/lib/utils'
import { CopyIcon } from '@radix-ui/react-icons'
import { useWallet } from '~/components/wallet-provider'

const User = () => {
  const { account } = useWallet()
  const [X] = useState({ name: 'Anna Hopper', handle: '@AnnaHooper_eth' })
  const [copied, setCopied] = useState(false)
  const shorterAccount = account
    ? account.slice(0, 5) + '...' + account.slice(-5)
    : null

  return (
    <div className='flex flex-col items-center gap-2'>
      <Avatar className='w-14 h-14'>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>IMG</AvatarFallback>
      </Avatar>
      <div className='text-[26px] text-white font-bold'>{X.name}</div>
      <div className='text-[18px] text-white'>{X.handle}</div>
      <div className='flex items-center gap-2 px-3 py-1'>
        <span className='text-[18px] text-white'>{shorterAccount}</span>
        {copied ? (
          <span className='text-[#adff2f] text-xs'>Copied!</span>
        ) : (
          <CopyIcon
            className='cursor-pointer hover:text-[#adff2f]'
            onClick={() => {
              copy(account, () => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              })
            }}
          />
        )}
      </div>
    </div>
  )
}

export default User
