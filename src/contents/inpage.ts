import { useStorage } from '@plasmohq/storage/hook'
import type { PlasmoCSConfig } from 'plasmo'
import { useEffect, useRef } from 'react';
import { inpageController } from '~/controller/inpageController' 

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  world: 'MAIN',
}
 

// 监听来自side panel或者content scripts的消息 他们都处于非Main的环境里，都具有window对象
window.addEventListener('message', (crop) => {
  if (
    crop.data.target === 'x-wallet-inpage' &&
    crop.origin === window.location.origin
  ) {
    const msgData = crop.data.data
    console.log(
      'execute controller:',
      inpageController(msgData.method, crop.data),
    )
  } else if(crop.origin === 'https://x.com'){
    //alert(crop);//redirect=redirectx
    console.log('crop is:',crop);
    //1.监听跳转（content_scripts）
    const urlParam = new URLSearchParams(window.location.search);
    const redirect_url =  urlParam.get('redirect');
    urlParam.set('type', 'xwebsite');
    if(redirect_url === 'redirectx'){
      //{ id: string; data: { method: string; data: any }; target: string }
      const userId = urlParam.get('userId');
      const urlParamObj = Object.fromEntries(urlParam.entries());
      //set_account(urlParamObj); //直接调用
      //handleEvent();//useeffect调用 
      
      // chrome.runtime.sendMessage(
      //   { type: "updateAccount", urlParamObj },
      //   (response) => {
      //     console.log("--------------56565555555555555555555Account update response:", response);
      //   }
      // );
      
        //chrome.storage.local.set({ account: urlParamObj }, () => {
        //   console.log("------------------------555555555Account updated to:", urlParamObj);
        // });
      window.postMessage(
        { source: "inpage", type: "updateAccount", account: urlParamObj },
        "*"
      );
      console.log("---------------111Message forwarded to background:", urlParamObj);
      //清理location
      window.history.replaceState({},document.title, window.location.pathname);
      const param = { id: urlParamObj.userId,                   //id: 'userId?.toString', //这里要用chatgpt修改
                      data: { method: 'method_redirectx', data:  urlParamObj},
                      target: 'target_redirectx'};
      console.log(
        '----------------------------execute controller_from_x_content_scripts2:',
        inpageController('requestLogin', param),
      );
    } else {
      console.log('redirect_url:',redirect_url);
    }
  } 
});

 