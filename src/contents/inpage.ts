import { useStorage } from '@plasmohq/storage/hook'
import type { PlasmoCSConfig } from 'plasmo'
import { useEffect, useRef } from 'react';
import type { User } from '~/components/pages/tab/AuthContext';
import { inpageController } from '~/controller/inpageController' 

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  world: 'MAIN',
}
 

// 监听来自side panel或者content scripts的消息 他们都处于非Main的环境里，都具有window对象
const listener_login = (crop:MessageEvent<any>) => {
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
    //console.log('crop is:',crop);
    //1.监听跳转（content_scripts）
    //window.location.search是后端redirect到的url：
    //https://x.com/?redirect=redirectx&token=6f8f7d9d74d8cb33971e0963a4342d2e&userId=6&nickname=Kurry&avatarUrl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1865723832775917568%2FDaTBV4Rh_normal.png&twitterUsername=Kurry_test
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
      //url转换为account对象：
      //url: https://x.com/?redirect=redirectx
      //&token=8f9a30a0f1faaf4f98e8ffd040b9de32
      //&userId=8
      //&nickname=Kurry
      //&avatarUrl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1865723832775917568%2FDaTBV4Rh_normal.png
      //&twitterUsername=Kurry_test
      //&inviteCode=Zq5c9iV1
      //&walletAddress=
      //account的user类型：             
      //如果是钱包登录，那么： 服务器端的返回值:
            //{code: 0, message: 'Wallet sign-in successful', isNew: false, 
            // userId: 13, token: '944bdd252e05d13d2c9540687a182649', 
            //userInfo :  
            //{avatarUrl: "", createTime : 0, extra :  "", followReward :  0 ,inviteCode : "FBz72SQA",
            //inviterCode :  "", nickname :  "",sex :  0 
            //twitterId : "", twitterUsername :  "",
            //updateTime : 0, userId :  13 , walletAddress :  "0xD1174C910bD9317CbD5f0F174f58d12b12b68cF1"
            //xpoint :  0
            //}}
      //客户端定义的user类型:
      /**
       export type UserInfo = {
        nickname: string;
        avatarUrl: string;
        twitterUsername: string;
        inviteCode: string;
        walletAddress: string | null;
        extra: string | null;
        inviterCode: string | null;
        userId: number | null;
        xpoint: number | null;
        followReward: number | null;
        sex: number | null;
        createTime: number | null;
        updateTime: number | null;
      } | null;
      export type User = {
        userId: string;
        token: string;
        userInfo: UserInfo;
        code: number | null;
        message: string | null;
        isNew: boolean | null;
      } | null;
       */
      let account: User = {
        userId: urlParamObj.userId,
        token: urlParamObj.token,
        userInfo: {
          nickname: urlParamObj.nickname,
          avatarUrl: urlParamObj.avatarUrl,
          twitterUsername: urlParamObj.twitterUsername,
          inviteCode: urlParamObj.inviteCode,
          walletAddress: urlParamObj.walletAddress
        }
      };
      //出现这种情况的场景：  用户先用钱包登录，然后点击follow按钮：  跳转到twitter登录页面， 用之前登录过xchat的twitter用户来登录twitter 
      
      console.log("---------------4444urlParamObj.errMessage:", urlParamObj.errMessage);
      if(urlParamObj.errMessage==="userexists"){
        //1
        // alert('您登录的用户已存在,请使用其他twitter用户登录来绑定您目前登录的钱包用户');
        // return;
        //2 
        //window.removeEventListener('message', listener_login);
        console.log("---------------333Message forwarded to background:", account);
        window.postMessage( 
          { source: "inpage", type: "mergeAccountConflict", account},
          "*"
        );
      } else  if(urlParamObj.errMessage==="bindsuccess"){
        console.log("---------------2222Message forwarded to background:", account); 
        window.postMessage(
          //{ source: "inpage", type: "updateAccount", account: urlParamObj },
          { source: "inpage", type: "mergeAccountSuccess", account},
          "*"
        );
      } else {
        //出现这种情况的场景：  用户先用钱包登录，然后点击follow按钮：  跳转到twitter登录页面， 用之前登录过xchat的twitter用户来登录twitter 
        console.log("---------------111Message forwarded to background:", account);
        window.postMessage(
          //{ source: "inpage", type: "updateAccount", account: urlParamObj },
          { source: "inpage", type: "updateAccount", account},
          "*"
        );
      }
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
      //console.log('param-redirect is not redirectx:',urlParam);
    }
  } 
}; 
window.addEventListener('message',  
  listener_login
);

 