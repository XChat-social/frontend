export {}
// 负责接收inpage 和 background 的消息
window.addEventListener('message', (crop) => {
  if (crop.data.target === 'x-wallet-content') {
    console.log('HELLO', crop.data)
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
