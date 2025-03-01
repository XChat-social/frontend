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
  const { type, account, tokenSymbol, add } = crop.data;
  if (type === "updateAccount") {
    // 在内容脚本中使用 chrome.storage 设置数据
    console.log("-------------------------------8888888888Account updated:", account);
    chrome.storage.local.set({
      account, accountStoredTime: Date.now()
    }, () => {
      console.log("-------------------------------999999Account updated2223333:", account);
      chrome.storage.local.get("account", (result) => {
        console.log(result.accountStoredTime, "，Account2233 retrieved after set:", result.account);
      });
    });
  } else if (type === "updateAddress") {
    // 在内容脚本中使用 chrome.storage 设置数据
    debugger;
    console.log("-------------------------------add updated:", add);
    chrome.storage.local.set({
      tokenSymbol, add, addStoredTime: Date.now()
    }, () => {
      console.log(tokenSymbol,"-------------------------------add updated2223333:", add);
      chrome.storage.local.get("add", (result) => {
        console.log(result.tokenSymbol, "tokenSymbol-add retrieved after set:", result.add);
        //此时获取到的result.addStoredTime是undefiend，因为你get到的是add,此时addStoredTime这个key还没有被设置
      });
      chrome.storage.local.get("tokenSymbol", (result) => {
        console.log(result.tokenSymbol, "tokenSymbol-add2 retrieved after set:", result.add);
        //此时获取到的result.addStoredTime是undefiend，因为你get到的是add,此时addStoredTime这个key还没有被设置
      });
    });
  } else if (type === "mergeAccountConflict") {
      console.log("-------------------------------8888888888Account-conflict updated-conflict:", account);
      //alert('您登录的用户已存在,请使用其他twitter用户登录，来绑定您目前登录的钱包用户,之后再点击follow按钮');
      alert('The logged-in user already exists.Please log in with a different X account to link the current wallet.');
  } else if (type === "mergeAccountSuccess") {
    console.log("-------------------------------8888888888Account-mergeAccountSuccess:", account);
    chrome.storage.local.set({
      account, accountStoredTime: Date.now()
    }, () => {
      console.log("-------------------------------999999Account-mergeAccountSuccess:", account);
      chrome.storage.local.get("account", (result) => {
        console.log(result.accountStoredTime, "mergeAccountSuccess retrieved after set:", result.account);
        //alert('已经将您登录xchat时的钱包用户与您刚才登录的twitter用户绑定，请您返回任务界面，再次点击follow按钮');
        alert('Your X account has been sucessfully linked to the task page and click the follow button agin.');
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
