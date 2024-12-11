console.log('root-background.ts222');
export {}
console.log('root-background.ts');

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    console.log('trigger chrome-create listener.......'+message);
    if (message.action === 'createTab') {
        console.log('2222222222222222222222222='+message.url);
        chrome.tabs.create({ url: message.url });
    }
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