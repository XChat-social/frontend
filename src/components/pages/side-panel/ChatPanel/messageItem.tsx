import type { VirtualItem } from '@tanstack/react-virtual'
import type { Message } from './chatRoomDialog'

import up from 'url:@/assets/icon/thumb-up.png'
import down from 'url:@/assets/icon/thumb-down.png'

export const MessageItem = ({
  message,
  virtualRow,
  virtualizer,
}: {
  message: Message
  virtualRow: VirtualItem
  virtualizer: any
}) => {
  return (
    <div
      key={message.id}
      data-index={virtualRow.index}
      ref={virtualizer.measureElement}
      className={`absolute w-full p-2 flex text-black ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
      style={{ top: `${virtualRow.start}px` }}
    >
      <div
        className={`flex max-w-[75%] ${message.sender === 'me' ? 'flex-row-reverse' : ''}`}
      >
        <div className='w-12 h-12 rounded-full overflow-hidden mx-2'>
          <img
            className='w-full'
            src='https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c'
            alt=''
          />
        </div>

        <div className='flex flex-col flex-1'>
          <div
            className={`font-bold text-white ${message.sender === 'me' ? 'text-right' : 'text-left'}`}
          >
            User Name
          </div>
          <div
            className={`min-w-full flex-1 p-2 rounded-lg break-words ${message.sender === 'me' ? 'bg-[rgb(213,229,156)]' : 'bg-[rgb(231,231,231)]'} shadow`}
          >
            {message.text}
          </div>
          <div
            className={`w-full flex ${message.sender === 'me' ? 'justify-start' : 'justify-end'}`}
          >
            <div className='flex items-center space-x-2 my-2'>
              <div className='cursor-pointer flex items-center justify-center w-6 h-6 rounded-full'>
                <img src={up} alt='thumb-up' className='w-full h-full' />
              </div>
              <div className='cursor-pointer flex items-center justify-center w-6 h-6 rounded-full'>
                <img src={down} alt='thumb-up' className='w-full h-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
