import { useStorage } from '@plasmohq/storage/hook'
import { useEffect, useState } from 'react'
import UnlockPage from '~/components/pages/unlock-page'
import { Spinner } from '~/components/ui/spinner'
import SidePanel from '../side-panel'
import { AuthProvider, useAuth } from '~/components/pages/tab/AuthContext'
import type { User } from '~/components/pages/tab/AuthContext'

const Tab = () => {
  const [loading, setLoading] = useState(true)
  // 监听storage的变化， 获取登录状态
  const [account, setAccount] = useState<string | null>(null)
  //const [account5, setAccount5] = useStorage('')
  //是否超过20分钟没有在页面上进行任何操作
  const [isTimeout, setIsTimeout] = useState(false)
  //const { login } = useAuth();

  setTimeout(() => {
    setLoading(false)
  }, 300)


  // chrome.storage.local.get("account", (result) => {
  //   const account2 = result.account; // 读取存储中的 account 值
  //   if (account2) {
  //     console.log("------------------------Account:", account2);
  //     //为了适应“另外两个登录的老旧代码”，所以要加这一句
  //     setAccount5(account2);
  //     //保存到全局变量中
  //     console.log("------------------------11111111111111111111Account:");
  //     //login(account2 as User);
  //     console.log("------------------------222222222222222222222Account:");
  //   } else {
  //     console.log("No account found in storage.");
  //   }
  // });
  useEffect(() => {
    //1
    //定时器： 定时器指向的函数的索引
    let timeoutId: NodeJS.Timeout | null = null
    //2
    //监听器： 删除旧的定时器，产生新的定时器
    const resetTimeout = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      //定时器
      timeoutId = setTimeout(() => {
        // 超时处理逻辑:删除storage中的account，设置成“超时”状态
        chrome.storage.local.remove(['account'], () => {
          console.log('Session expired due to inactivity.')
          setAccount(null)
          setIsTimeout(true)
        })
      }, 1440 * 60 * 1000) // 1分钟
      //20 * 60 * 1000) // 20分钟
    }
    // "window窗口"会： 监听用户交互事件, 当发生此类事件的时候，会触发resetTimeout这个监听器
    const events = ['mousemove', 'keydown', 'click']
    events.forEach((event) => {
      window.addEventListener(event, resetTimeout)
    })
    //3
    //监听器： 负责设置“storage中的account”为“实际账户信息”,设置“超时状态”为“未超时”
    const handleStorageChange = (
      changes: { [key: string]: chrome.storage.StorageChange },
      areaName: string
    ) => {
      if (areaName === 'local' && changes.account) {
        chrome.storage.local.get(['tabId', 'activeTabId', 'account', 'accountStoredTime'], (result) => {
          //当前的tab页activeTabId    是否是     最开始打开的tab页tabId
          console.log('11--' + result.tabId + '--12' + 'activeTabId2222 is:' + '11--' + result.activeTabId + '--12');
          console.log("changes.account2222 is:", changes.account);
          if (result.account && result.accountStoredTime) {
            const currentTime = Date.now();
            const oneDayInMillis = 24 * 60 * 60 * 1000; // 一天的毫秒数
            if (currentTime - result.accountStoredTime > oneDayInMillis) {
              // 超过一天，清除存储
              chrome.storage.local.remove("account");
              chrome.storage.local.remove("accountStoredTime");
            } else {
              console.log("Account is still valid:", result.account);
              setAccount(changes.account.newValue || null)
              setIsTimeout(false)
            }
          }
        });
      }
    }
    // "chrome浏览器"会： 监听storage的变化, 当发生此类事件的时候，会触发handleStorageChange这个监听器
    chrome.storage.onChanged.addListener(handleStorageChange)
    //5. 获取初始值: 只要是想登录，不管是第一次还是其他改变了cookie的时候，只有这个cookie的值不是null且没有超过1天的时候，才允许设置setAccount(cookie中的值)
    chrome.storage.local.get(["account", "accountStoredTime"], (result) => {
      if (result.account && result.accountStoredTime) {
        const currentTime = Date.now();
        const oneDayInMillis = 24 * 60 * 60 * 1000; // 一天的毫秒数
        if (currentTime - result.accountStoredTime > oneDayInMillis) {
          // 超过一天，清除存储
          chrome.storage.local.remove("account");
          chrome.storage.local.remove("accountStoredTime");
        } else {
          console.log("Account is still valid-init:", result.account);
          setAccount(result.account || null);
          if (result.account) {
            resetTimeout(); // 启动倒计时
          }
        }
      }
    })
    //6. 清理
    // 清理2个监听器和一个定时器
    return () => {
      console.log('when tab-component ends, clear 2monitor and 1timer')
      chrome.storage.onChanged.removeListener(handleStorageChange)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      events.forEach((event) => {
        window.removeEventListener(event, resetTimeout)
      })
    }
  }, [])
  console.log("22222222------------------------Account:", account);


  if (loading) {
    return (
      <div className='w-[504px] h-screen relative flex flex-col items-center justify-center bg-black text-black'>
        <Spinner />
      </div>
    )
  }

  //if (account5) {
  if (account && !isTimeout) {
    //if (1) {
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
