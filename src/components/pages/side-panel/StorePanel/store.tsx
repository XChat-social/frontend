import React, { useState, useEffect } from 'react'
import PixelButton from '../components/PixelButton'
import Image from 'next/image'
import icon1 from 'data-base64:@/assets/xcoinm2x.png'
import icon2 from 'data-base64:@/assets/xcoin.svg'
// import icon1 from '~/assets/xcoinm2x.png';
// import icon2 from '~/assets/xcoin.svg';
//import XCoin from 'react:~/assets/xcoin.svg' 
import { type User } from '~/components/pages/tab/AuthContext';
//grpc
import { BusinessExtClient } from '~/components/pages/unlock-page/business.ext_grpc_web_pb';// 服务类

const PixelIcon = ({
  color = '#adff2f',
  imageUrl,
}: {
  color?: string
  imageUrl?: string
}) =>
  imageUrl ? (
    <Image src={imageUrl} alt='Icon' width={60} height={60} className='mr-2' />
  ) : (
    <svg width='60' height='60' viewBox='0 0 6 6' className='mr-2'>
      <rect width='6' height='6' fill={color} />
      <rect x='1' y='1' width='1' height='1' fill='white' fillOpacity='0.5' />
      <rect x='1' y='4' width='1' height='1' fill='black' fillOpacity='0.3' />
    </svg>
  )

const Store = () => {
  const handleWalletClick = () => console.log('My Wallet clicked')
  const handleSwap = () => console.log('Swap button clicked')
  //获取动态的用户积分-begin
  const [account3, setAccount3] = useState<User>(null);
  const [xpoint, setXpoint] = useState('0');


  useEffect(() => {
    chrome.storage.local.get("account", (result) => {
      const account2 = result.account; // 读取存储中的 account 值
      if (account2) {
        setAccount3(account2);
        console.log("------------------------#Store#Account3333:", account3);
      } else {
        console.log("------------------------#Store#No account found in storage.");
      }
    });
  }, []);

  //页面初始化的时候执行
  useEffect(() => {
    const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
    // 创建请求对象
    const request = new proto.pb.GetUserReq();
    //string到number的类型转换
    const userIdValue = account3?.userId;
    const convertedUserId = Number(userIdValue);
    request.setUserId(isNaN(convertedUserId) ? -1 : convertedUserId);
    //request.setUserId(Number(account3?.userId) || 0);
    //const metadata = {};
    console.log('---------w4444444444Store444444444444444account=', account3);
    const metadata: { [x: string]: string } = {
      'user-id': account3?.userId || '',
      'token': account3?.token || '',
      'device-id': '0',
    };
    // 调用服务方法获取"每日签到这个任务的状态"：currentState
    //client.getTaskStatus();
    client.getUser(request, metadata, (err, response) => {
      if (err) {
        console.error('#####333333333333Store33333333333333Error:', err.message);
      } else {
        //暂时先让他跳转， 实际应该使用redux来共享这个account数据， 在inpage.ts的监听器中设置redux中的setAccount 
        console.log('#####33333333333333333Store33333333333333333333333before..............redux..................');
        //setAccount('result.data');
        console.log('#####3333333333333Store333333333Response:', response.toObject());
        /**
Object
  code
  : 
  0
  message
  : 
  "Success"
  user
  : 
    avatarUrl
    : 
    "https://pbs.twimg.com/profile_images/1865723832775917568/DaTBV4Rh_normal.png"
    createTime
    : 
    1734601529
    extra
    : 
    ""
    followReward
    : 
    1
    inviteCode
    : 
    "Zq5c9iV1"
    inviterCode
    : 
    ""
    nickname
    : 
    "Kurry"
    sex
    : 
    0
    twitterId
    : 
    "1865723771019046914"
    twitterUsername
    : 
    "Kurry_test"
    updateTime
    : 
    1734604240
    userId
    : 
    8
    xpoint
    : 
    60
         */
        //alert(response.toObject());
        if (response.toObject().code === 0) {
          setXpoint(response.toObject().user.xpoint);
          console.log('-getTaskStatus-Store-means:', response.toObject().message);
        } else {
          console.log('-getTaskStatus-Store-errormessage:', response.toObject().message);
        }
      }
    });
  }, [account3]);
  //获取动态的用户积分-end
  return (
    <div className='text-white mx-[24px] font-mono'>
      <div className='flex justify-end mb-[52px]'>
        <PixelButton
          onClick={handleWalletClick}
          backgroundColor='#adff2f'
          width={153}
          height={44}
        >
          My Wallet
        </PixelButton>
      </div>

      <div className='flex justify-between mb-[37px]'>
        <div className='bg-gray-800 rounded-[10px] w-[200px] h-[115px] flex flex-col items-center'>
          <div className='mt-[-30px]'>
            <PixelIcon imageUrl={icon1} />
          </div>
          <span className='text-sm mt-[8px]'>XCoin</span>
          <div className='text-xl text-[#BCF804]'>0</div>
        </div>
        <div className='bg-gray-800 rounded-[10px] w-[200px] h-[115px] flex flex-col items-center'>
          <div className='flex items-center mb-1 mt-[-30px]'>
            <PixelIcon imageUrl={icon2} />
          </div>
          <span className='text-sm mt-[8px]'>XPoint</span>
          <div className='text-xl text-[#BCF804]'>{xpoint}</div>
        </div>
      </div>

      {/* <div className='bg-gray-800 p-3 rounded-[10px] flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='w-[48px] h-[48px] bg-[#adff2f] rounded-full'></div>
          <div className='ml-[16px] flex flex-col'>
            <span className='text-sm mr-2'>XCoin</span>
            <span className='text-sm'>500XPoint</span>
          </div>
        </div>
        <div className='w-[77px] h-[34px] bg-[#BCF804] rounded-[22px] px-[14px] py-[5px] cursor-pointer text-lg text-black text-center'>
          Swap
        </div>
      </div> */}
    </div>
  )
}

export default Store
