import { useStorage } from '@plasmohq/storage/hook'
import { useEffect, useState } from 'react'
import UnlockPage from '~/components/pages/unlock-page'
import { Spinner } from '~/components/ui/spinner'
import SidePanel from '../side-panel'

const Tab = () => {
  const [loading, setLoading] = useState(true)
  // 监听storage获取登录状态
  const [account] = useStorage('account')

  setTimeout(() => {
    setLoading(false)
  }, 300)

  useEffect(() => {
    console.log('Tab account change', account)
  }, [account])

  if (loading) {
    return (
      <div className='w-[504px] h-screen relative flex flex-col items-center justify-center bg-black text-black'>
        <Spinner />
      </div>
    )
  }

  if (account) {
    return (
      <div className='w-[504px] h-[813px] relative flex flex-col items-center bg-black'>
        <SidePanel />
      </div>
    )
  }
  return <UnlockPage />
}

export default Tab
