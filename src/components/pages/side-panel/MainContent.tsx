import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import FriendsPanel from './FriendsPanel/friends'
import { ChatPanel } from './ChatPanel'
import TaskPanel from './TaskPanel/task'
import StorePanel from './StorePanel/store'
import SettingsPanel from './SettingsPanel/settings'
import tabsBgImage from 'data-base64:@/assets/tabs-bg.png'
import chatIcon from 'data-base64:@/assets/chat-small.png'
import chatIconBig from 'data-base64:@/assets/chat-big.png'
import friendsIcon from 'data-base64:@/assets/friends-small.png'
import friendsIconBig from 'data-base64:@/assets/friends-big.png'
import storeIcon from 'data-base64:@/assets/store-small.png'
import storeIconBig from 'data-base64:@/assets/store-big.png'
import settingsIcon from 'data-base64:@/assets/settings-small.png'
import settingsIconBig from 'data-base64:@/assets/settings-big.png'
const MainContent = () => {
  const [isDiscountDialogOpen, setIsDiscountDialogOpen] = useState(false)

  const onOpenDiscountDialog = () => {
    setIsDiscountDialogOpen(true)
  }

  const handleDiscountSubmit = (code: string) => {
    console.log('Discount code submitted:', code)
    setIsDiscountDialogOpen(false)
  }

  return (
    <div className='relative w-full h-full flex flex-col'>
      <Tabs defaultValue='task' className={'w-full h-full flex flex-col'}>
        <TabsList
          className={`grid w-full grid-cols-4 rounded-none px-2 h-[81px] flex-shrink-0`}
          style={{
            backgroundImage: `url(${tabsBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <TabsTrigger
            value='chat'
            src={{ default: chatIcon, active: chatIconBig }}
            width={{ default: 21, active: 30 }}
            height={{ default: 21, active: 28 }}
          />
          <TabsTrigger
            //value='settings'
            value='task'
            src={{ default: settingsIcon, active: settingsIconBig }}
            width={{ default: 21, active: 30 }}
            height={{ default: 21, active: 28 }}
          />
          <TabsTrigger
            value='store'
            src={{ default: storeIcon, active: storeIconBig }}
            width={{ default: 21, active: 30 }}
            height={{ default: 21, active: 28 }}
          />
          <TabsTrigger
            value='friends'
            src={{ default: friendsIcon, active: friendsIconBig }}
            width={{ default: 21, active: 30 }}
            height={{ default: 21, active: 28 }}
          />
        </TabsList>
        <div className='flex-grow overflow-auto'>
          <TabsContent value='chat'>
            <ChatPanel />
          </TabsContent>
          <TabsContent 
          // value='settings'
          value='task'
          >
            <TaskPanel />
            {/* <SettingsPanel /> */}
          </TabsContent>
          <TabsContent value='store'>
            <StorePanel />
          </TabsContent>
          <TabsContent value='friends'>
            <FriendsPanel />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default MainContent
