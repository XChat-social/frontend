import type { Url } from "url";

console.log('root-background.ts222');
export {}
console.log('root-background.ts');

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('trigger chrome-create listener.......'+message);
    if (message.action === 'createTab') {
        console.log('2222222222222222222222222='+message.url);
        chrome.tabs.create({ url: message.url });
    } 
    // else   if (message.type === "updateAccount") {
    //   chrome.storage.local.set({ account: message.account }, () => {
    //     console.log("------------------------99999999999999999Account updated in background:", message.account);
    //   });
    //   sendResponse({ status: "success" });
    // }
  });
  


    //4
    // 监听 Tab 页关闭事件
    // background.ts
    let activeTabId: number | null = null;
    //let previousActiveTabId: number | null = null;
    let tab_url: string | undefined = '';
    let tab_title: string | undefined = '';
    // 监听当前激活的 Tab ID
    chrome.tabs.onUpdated.addListener((tabId,changeInfo, tab) => {
      debugger; 
      chrome.tabs.get(tabId, (tab) => {
        //当访问twitter的时候： 才设置tab_url和tab_title
        // if (tab.url && tab.url.includes('x.com')){
        //   tab_url = tab.url;
        //   tab_title = tab.title;
        // }
        //当访问twitter，且不是打开钱包窗口的时候： 才给activeTabId赋值
        //if (tab.url && tab.url.includes('x.com') && (tab_title==='X') ) {
        if (tab.url === 'https://x.com/') {
          tab_url = tab.url;
          console.log('chrome.tabs.onActivated.addListener:', tabId);
          //关闭tab页面的时候，可能会触发这个函数，此时tabid是null， 所以需要判断一下：只有tabid不是null的时候才将tabid保存到activeTabId中
          if(tabId){
            activeTabId = tabId;
          }
          debugger;
        }
      });
      
    })
    // 监听 Tab 页关闭事件
    chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
      //chrome.tabs.get(tabId, (tab) => {
        //当“关闭的是twitter的tab页面”且“关闭的不是钱包窗口”的时候：  才删除用户信息
        //if (tab_url && tab_url.includes('x.com') && (tab_title==='X')) {
        if (tab_url === 'https://x.com/') {
            // 这里可以添加你想要执行的代码逻辑，比如打印一些信息到控制台，表示特定网址的tab页被关闭了
            console.log(`Tab with ID ${tabId} and URL ${tab_url} from x.com has been removed.`);
            // 你也可以在这里进行更多复杂的操作，比如向后台服务器发送通知等，取决于你的具体需求
            console.log(activeTabId, 'is activeTabId,tabid is:', tabId);
            debugger;
            console.debug('22--' + tabId + '--22' + 'activeTabId333 is:' + '22--' + activeTabId + '--22');
            console.debug((tabId+'') === (activeTabId+''));
            console.debug(('22--' + tabId + '--22') === ('22--' + activeTabId + '--22'));
            console.debug(111111);
            // chrome.storage.local.set({activeTabId, tabId}, () => {
            //   //console.log(tabId, "-------------------------------activeTabId updated:", activeTabId)
            //   chrome.storage.local.get(['activeTabId', 'tabId'], (result) => {
            //       //console.log(result.tabId,"activeTabId retrieved after set:", result.activeTabId)
            //   })
            // })
            if (tabId === activeTabId) {
              // // 如果是当前活动的 Tab，则清空 storage
              chrome.storage.local.remove(['account', 'loginTime'], () => {
                console.log('Tab closed, account cleared.')
              })
              // 可选：发送消息通知其他前端页面刷新状态
              //chrome.runtime.sendMessage({ type: 'TAB_CLOSED' })
            } else {
              console.log(activeTabId, 'is activeTabId22222222,tabId !== activeTabId, tabid22222222 is:', tabId)
            }
        }
      //});
      // chrome.storage.local.remove(['account', 'loginTime'], () => {
      //   console.log('Tab closed, account cleared.')
      // })
      // chrome.storage.local.set({activeTabId, tabId}, () => {
      //   //console.log(tabId, "-------------------------------activeTabId updated:", activeTabId)
      //   chrome.storage.local.get(['activeTabId', 'tabId'], (result) => {
      //       //console.log(result.tabId,"activeTabId retrieved after set:", result.activeTabId)
      //   })
      // })
      // 可选：发送消息通知其他前端页面刷新状态
      //chrome.runtime.sendMessage({ type: 'TAB_CLOSED' })
    });
    // 监听浏览器窗口关闭事件（仅适用于 Manifest v2）
    // Manifest v3 使用 onSuspend 事件处理
    chrome.windows.onRemoved.addListener(() => {
      // console.log(activeTabId, 'is activeTabId33333333')
      // chrome.storage.local.remove(['account', 'loginTime'], () => {
      //   console.log('Window closed, account cleared.')
      // })
    });


  console.log('index loading complete.......');


// chrome.runtime.onMessage.addListener(
//   (message: { target: string; data: any }) => {
//     console.log('sw receive msg:', message)
//     if (message.target === 'x-wallet-background') {
//       window.postMessage({
//         target: 'x-wallet-content',
//         data: message.data,
//       })
//     }
//   },
// )

// chrome.runtime.onConnect.addListener(function(port) {
//   console.log(port);
//   if (port.name === 'x-wallet-sidepanel') {
//     port.onMessage.addListener(async (msg) {
//       console.log('data form x-wallet-sidepane by port:',msg);
//       if(msg.target === 'x-wallet-background') {
//         if(msg.data.method === 'getAccount'){
//           const account = await chrome.storage.local.get(['account'])
//           port.postMessage({target: 'x-wallet-sidepanel', data:{method:'getAccount', data: account}});
//         }
//       }
//     });
//   }
// });


/***
 "background": {
    "service_worker": "src/background.ts"
  }
    
  





  在Plasmo框架中，通常情况下，background.ts 是你扩展程序的后台脚本文件，它会在浏览器的扩展环境中运行，并且是由 manifest.json 中的 background 配置项进行指定的。

你遇到的问题，console.log(1111) 没有在浏览器的控制台上输出，可能有几个原因。下面是一些常见的排查和解决方案：

1. 确认 background.ts 已被正确配置
确保你的 background.ts 文件已经正确配置在 manifest.json 文件中。应该类似于这样：

json
复制代码
{
  "background": {
    "service_worker": "src/background.ts"
  }
}
这样配置之后，Plasmo 会识别到并加载 background.ts。如果你在 background.ts 中做了更改，浏览器应该能识别到这些变动并自动更新。

2. 检查开发模式和自动刷新
如果你使用的是开发模式（通过 plasmo dev 启动），Plasmo 应该会自动监测到文件的更改并重新加载扩展程序。但是，有时候开发服务器可能需要手动刷新才能正确加载更改。

解决方案：
在浏览器的扩展页面（chrome://extensions/ 或 edge://extensions/）中，找到你的扩展程序并点击 刷新 按钮，确保你的扩展加载了最新的代码。
确保你没有在浏览器的开发者工具中选择 "Disable cache"（禁用缓存），否则扩展可能无法及时加载新的更改。
3. 确保 background.ts 中的 console.log 执行
background.ts 文件中的代码是在扩展的后台服务工作线程（service worker）中运行的，而服务工作线程的生命周期与浏览器的标签页和普通的前台脚本是分开的。你在后台脚本中使用 console.log 输出的内容，应该出现在浏览器的 背景页面 控制台中，而不是普通网页的控制台。

打开扩展的开发者工具：在 chrome://extensions/ 页面，点击你的扩展旁边的 "服务工作线程"（Service Worker）链接，进入后台页面。
这样你应该能够看到后台脚本中的 console.log 输出。
4. 检查是否有错误阻止脚本执行
如果 background.ts 中有语法错误或者其他执行错误，可能会导致后台脚本无法正确运行。你可以查看背景页面的控制台（Service Worker 控制台）看看是否有任何错误信息。

5. 确保你的 Plasmo 版本支持背景脚本
在 Plasmo 0.88.0 版本中，支持通过 service_worker 来指定后台脚本，因此理论上应该可以直接识别到 background.ts 文件。如果有疑问，可以查看 Plasmo 的官方文档或者升级到最新版本，看看是否解决了相关问题。

总结
确认你的 background.ts 已正确配置。
确保你刷新了扩展程序，并且在正确的开发者工具窗口中查看控制台输出。
如果还是没有输出，可以在服务工作线程的控制台查看是否有错误信息。
按照这些步骤，应该能够帮助你解决 console.log 输出的问题。


 */