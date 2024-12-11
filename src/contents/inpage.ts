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
  } 
})

 