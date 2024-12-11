import { useVirtualizer, type VirtualItem } from '@tanstack/react-virtual'
import React, { useEffect, useRef, useState } from 'react'
import { MessageItem } from './messageItem'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import bg from 'url:@/assets/bg/navbar.png'
import { ChevronLeftIcon } from '@radix-ui/react-icons'

import { openChat, RoomObserver, type RoomT } from './chatRoomObserver'

// 定义消息的类型
export interface Message {
  id: number
  text: string
  sender: 'me' | 'other'
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [containerHeight, setContainerHeight] = useState<number>(0)
  const parentRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const container = useRef<HTMLInputElement>(null)

  // 初始化虚拟化器
  const virtualizer = useVirtualizer({
    count: messages.length,
    getScrollElement: () => parentRef.current as HTMLDivElement,
    estimateSize: () => 60, // 初始估计消息高度
  })

  // 模拟加载更多历史消息
  const loadMoreMessages = () => {
    const oldMessages: Message[] = Array(20)
      .fill(null)
      .map((_, i) => ({
        id: messages.length + i,
        text: `Old message ${
          messages.length +
          i +
          ' ' +
          Array(parseInt(Math.random() * 10 + '', 10))
            .fill('ab33333c')
            .join('-')
        }`,
        sender: i % 2 === 0 ? 'me' : 'other',
      }))
    setMessages((prev) => [...oldMessages, ...prev])
  }

  // 自动滚动到底部
  useEffect(() => {
    if (messages.length > 0) {
      virtualizer.scrollToIndex(messages.length - 1)
    }
  }, [messages.length])

  // 处理发送消息
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault() // 防止默认的 Enter 行为（如换行）
      handleSendMessage()
    }
  }

  const handleSendMessage = () => {
    if (inputRef.current?.value) {
      const newMessage: Message = {
        id: messages.length,
        text: inputRef.current.value,
        sender: 'me',
      }
      setMessages((prev) => [...prev, newMessage])
      inputRef.current.value = '' // 清空输入框
    }
  }

  // 处理滚动事件，滚动到顶部时加载更多消息
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop === 0) {
      loadMoreMessages()
    }
  }

  useEffect(() => {
    loadMoreMessages()
  }, [])

  useEffect(() => {
    if (container.current) {
      setContainerHeight(container.current.clientHeight)
      console.log('clientHeight', container.current.clientHeight)
    }
  }, [container])

  return (
    <div className='flex flex-col h-full overflow-hidden'>
      <div className='flex-1 overflow-hidden' ref={container}>
        {containerHeight >= 0 ? (
          <div
            ref={parentRef}
            style={{ overflowY: 'auto', height: `${containerHeight}px` }}
            onScroll={handleScroll}
          >
            <div
              style={{
                height: `${virtualizer.getTotalSize()}px`,
                position: 'relative',
              }}
            >
              {virtualizer.getVirtualItems().map((virtualRow: VirtualItem) => {
                const message = messages[virtualRow.index]

                return (
                  <MessageItem
                    key={virtualRow.index}
                    message={message}
                    virtualizer={virtualizer}
                    virtualRow={virtualRow}
                  ></MessageItem>
                )
              })}
            </div>
          </div>
        ) : null}
      </div>

      <div className='bg-[rgb(32,40,52)] pt-[10px] px-6'>
        <div className='flex items-center mb-[12px]'>
          <Button className='h-[40px] bg-[#BCF804] hover:bg-[#bbf804de] text-black rounded-[20px]'>
            Highlighted Messages
          </Button>
          <Button className='ml-5 h-[40px] bg-[#BCF804] hover:bg-[#bbf804de] text-black rounded-[20px]'>
            Task
          </Button>
          <span className='ml-auto font-bold text-lg text-green-400'>
            +30 XPoints
          </span>
        </div>

        <div className='flex items-center mb-[22px]'>
          <Input
            className='h-[50px]'
            ref={inputRef}
            onKeyDown={handleKeyDown}
            placeholder='Input here...'
          />
        </div>
      </div>
    </div>
  )
}

const RoomDialog = ({ id }: { id?: string }) => {
  const [chat, setChat] = useState<RoomT[]>([])

  useEffect(() => {
    return RoomObserver.subscribe((newChat) => {
      console.log('RoomObserver.subscribe', newChat);
      
      if (newChat.dismiss) {
        return setChat([
          ...chat.filter((item) => item.dialogId !== newChat.dialogId),
        ])
      }

      if (!newChat.parent) {
        setChat([...chat, newChat])
      } else if (newChat.parent && newChat.parent === id) {
        setChat([...chat, newChat])
      }
    })
  }, [])
  return (
    <>
      {chat.map((item) => {
        return (
          <div
            key={item.dialogId}
            className='absolute top-0 bottom-0 left-0 right-0 flex flex-col'
            style={{ zIndex: 1000 + (item?.index || 20) }}
          >
            <div
              className='h-[80px] flex items-center justify-center'
              style={{ background: `url(${bg}) center / cover no-repeat` }}
            >
              <ChevronLeftIcon
                className='absolute w-8 h-8 text-black left-4 top-[24px] cursor-pointer font-bold'
                onClick={() => {
                  RoomObserver.closeRoom(item)
                }}
              />
              <span className='font-bold text-xl font-pixel'>{item.title || '未命名聊天'}</span>
            </div>
            <div className='flex-col flex flex-1 overflow-hidden'>
              <div className='flex-1 relative text-white bg-black'>
                <Chat></Chat>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export { openChat, RoomDialog }
