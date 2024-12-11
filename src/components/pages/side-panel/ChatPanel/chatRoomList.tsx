import { forwardRef, useEffect, useRef, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { v4 as uuidv4 } from 'uuid'
import CreateChatRoomDialog from './createChatRoomDialog'
import { openChat } from './chatRoomDialog'
import search from 'url:@/assets/icon/search.png'

export type Room = {
  id: string
  title: string
  creator: string
  level: number
  randomNumber: number
  stakingList: string[]
  members: number
}

const test: Room[] = []

for (let i = 0; i < 10; i++) {
  test.push({
    id: uuidv4(),
    title: 'Chat Room ' + i,
    creator:
      'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
    level: 1,
    randomNumber: 1.1,
    stakingList: [
      'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
      'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
    ],
    members: 111,
  })
}

const CreateRoomBtn = forwardRef<HTMLButtonElement, { onClick?: () => void }>(
  ({ onClick }, ref) => {
    return (
      <Button
        ref={ref}
        className='h-[61px] w-[208px]'
        onClick={onClick}
        variant={'pixel'}
      >
        <div className='absolute w-full h-full flex items-center justify-center pointer-events-none z-10 font-bold'>
          Create Chat Room
        </div>
      </Button>
    )
  },
)

CreateRoomBtn.displayName = 'CreateChatRoomButton'

const SearchIcon = () => {
  return <img src={search} alt='search' className='w-6 h-6' />
}

export const ChatPanel = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSearch = (value: string) => {
    console.log(value)
  }
  const [rooms, setRooms] = useState<Room[]>([])

  const handleOpenRoom = (room: Room) => {
    openChat({
      id: room.id,
      title: room.title,
    })
  }

  useEffect(() => {
    setRooms(test)
  }, [])
  return (
    <div className='px-5 pb-3'>
      <div className='flex items-center justify-between mb-4'>
        <Input
          ref={inputRef}
          placeholder='Search'
          prefix={<SearchIcon />}
          aria-placeholder='Input any key words to search...'
          className='h-[56px] pl-14 text-lg'
          iconClick={handleSearch}
        />
      </div>
      <div className='flex items-center justify-between mb-[44px]'>
        <CreateChatRoomDialog trigger={<CreateRoomBtn />} />
        <Button className='h-[61px] w-[208px]' variant={'pixel'}>
          <div className='absolute w-full h-full flex items-center justify-center pointer-events-none z-10 font-bold'>
            Hottest Chat Room
          </div>
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-x-4 gap-y-12'>
        {rooms.map((room) => (
          <div
            className='relative flex flex-col text-sm rounded-xl shadow-sm px-4 py-2 pt-7 bg-[rgb(41,51,64)] text-white hover:bg-[rgb(54,69,88)] cursor-pointer'
            key={room.id}
            onClick={() => {
              handleOpenRoom(room)
            }}
          >
            <div className='absolute l-4 -top-6 rounded-lg border border-[#adff2f] overflow-hidden'>
              <img
                src={room.creator}
                alt='header'
                className='w-12 h-12 overflow-hidden'
              />
            </div>

            <div className='flex items-center justify-between'>
              <h1 className='font-bold text-lg'>{room.title}</h1>
            </div>
            <div className='flex items-center text-xs'>
              <span>Level:</span>
              {room.level}
            </div>
            <div className='flex items-center text-xs'>
              <span>Random Number:</span>
              {room.randomNumber}
            </div>
            <div className='font-bold my-1 text-sm'>Staking:</div>
            <div className='flex items-center'>
              <div className='flex items-center -space-x-4'>
                {Array(4)
                  .fill(0)
                  .map((item, index) => {
                    if (room.stakingList[index]) {
                      return (
                        <img
                          key={index}
                          src={room.stakingList[index]}
                          alt='header'
                          className='w-10 h-10 rounded-full overflow-hidden'
                        />
                      )
                    }
                    return null
                  })}
              </div>
              <div className='ml-2'>{room.members || 0} Participants</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
