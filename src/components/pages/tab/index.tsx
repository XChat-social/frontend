import { useStorage } from '@plasmohq/storage/hook'
import { useEffect, useState } from 'react'
import UnlockPage from '~/components/pages/unlock-page'
import { Spinner } from '~/components/ui/spinner'
import SidePanel from '../side-panel'

const Tab = () => {
  const [loading, setLoading] = useState(true)
  // 监听storage获取登录状态
  const [account,setAccount] = useStorage('account')

  setTimeout(() => {
    setLoading(false)
  }, 300)

 
  chrome.storage.local.get("account", (result) => {
   const account2 = result.account; // 读取存储中的 account 值
   if (account2) {
     console.log("------------------------Account:", account2);
     setAccount(account2);
   } else {
    console.log("No account found in storage.");
   }
 });
   console.log("22222222------------------------Account:",account);


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
