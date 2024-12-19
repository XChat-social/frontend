import { useStorage } from '@plasmohq/storage/hook'
import { useEffect, useState } from 'react'
import UnlockPage from '~/components/pages/unlock-page'
import { Spinner } from '~/components/ui/spinner'
import SidePanel from '../side-panel'
import { AuthProvider, useAuth } from '~/components/pages/tab/AuthContext'
import type { User } from '~/components/pages/tab/AuthContext'

const Tab = () => {
  const [loading, setLoading] = useState(true)
  // 监听storage获取登录状态
  const [account, setAccount] = useStorage('account')
  //const { login } = useAuth();

  setTimeout(() => {
    setLoading(false)
  }, 300)


  chrome.storage.local.get("account", (result) => {
    const account2 = result.account; // 读取存储中的 account 值
    if (account2) {
      console.log("------------------------Account:", account2);
      //为了适应“另外两个登录的老旧代码”，所以要加这一句
      setAccount(account2);
      //保存到全局变量中
      console.log("------------------------11111111111111111111Account:");
      //login(account2 as User);
      console.log("------------------------222222222222222222222Account:");
    } else {
      console.log("No account found in storage.");
    }
  });
  console.log("22222222------------------------Account:", account);


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
        {/* <AuthProvider>
          <SidePanel />
        </AuthProvider> */}
      </div>
    )
  }
  return <UnlockPage />
}

export default Tab
