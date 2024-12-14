import type { PlasmoCSConfig } from 'plasmo'
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
      const param = { id: '1',                   //id: 'userId?.toString', //这里要用chatgpt修改
                      data: { method: 'method_redirectx', data: Object.fromEntries(urlParam.entries()) },
                      target: 'target_redirectx'};
      console.log(
        'execute controller_from_x_content_scripts2:',
        inpageController('requestLogin', param),
      )
    } else {
      console.log('redirect_url:',redirect_url);
    }
  } 
})

 