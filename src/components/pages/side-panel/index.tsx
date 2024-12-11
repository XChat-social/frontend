import { RoomDialog } from './ChatPanel/chatRoomDialog'
import MainContent from './MainContent'

const SidePanel = () => {
  return (
    <div className='relative w-full h-full flex flex-col items-center text-sm text-black'>
      <MainContent />
      {/* 聊天窗口容器 通过openChat打开聊天窗口 */}
      <RoomDialog id='group-chat' />
    </div>
  )
}

export default SidePanel
