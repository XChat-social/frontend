export {}
// 负责接收inpage 和 background 的消息
window.addEventListener('message', (crop) => {
  if (crop.data.target === 'x-wallet-content') {
    console.log('HELLO', crop.data)
  }

// content-script.ts
//console.log("------------------------------77777777777777777777777777777Account updated:", crop);
  if (crop.source !== window || crop.data.source !== "inpage") {
    return;
  }
  const { type, account } = crop.data;
  if (type === "updateAccount") {
    // 在内容脚本中使用 chrome.storage 设置数据
    console.log("-------------------------------8888888888Account updated:", account);
    chrome.storage.local.set({ account }, () => {
      console.log("-------------------------------Account updated:", account);
      chrome.storage.local.get("account", (result) => {
          console.log("Account retrieved after set:", result.account);
      });
    });
  }
})

 


chrome.runtime.onMessage.addListener(
  (message: { target: string; data: any; }) => {
    console.log(message)
    if (message.target === 'x-wallet-content') {
      window.postMessage({
        target: 'x-wallet-inpage',
        data: message.data,
      })
    }
  },
)
 
console.log('content js')
