import React, { useState, useEffect } from 'react';
import PixelButton from '../components/PixelButton'
import GoldCoin from './gold_coin'
import Gift from './gift'
import { forwardRef } from 'react'
import { Button } from '~/components/ui/button'
import CreateInviteCodeDialog from './createInviteCodeDialog'
//import InvitationCodeInput from '../components/InvitationCodeInput'
import CreateToken from '../components/CreateToken'

//grpc
import { BusinessExtClient } from '~/components/pages/unlock-page/business.ext_grpc_web_pb';// 服务类
//import { GetTaskStatusReq } from '~/components/pages/unlock-page/business.ext_pb'; 
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';// 使用 google.protobuf.Empty
import 'xhr2'; // 确保在 Node.js 环境中支持 XMLHttpRequest
//import { useStorage } from '@plasmohq/storage/hook';
//全局上下文，保存用户信息
import { createContext, useContext } from 'react';
import { useAuth, type User } from '~/components/pages/tab/AuthContext';
import { useStorage } from '@plasmohq/storage/hook';
import { getTwitterAuthorizeURL } from '~/components/pages/unlock-page/index'
import { ethers } from 'ethers';
import { WindowPostMessage } from '~/lib/wpm'

interface TaskItemProps {
  icon: React.ReactNode
  name: string
  award?: string
  desc: string
  backgroundColor: string
  handleClick: React.MouseEventHandler<HTMLSpanElement>
}
const TaskItem = ({ icon, name, award, desc, backgroundColor, handleClick }: TaskItemProps) => {
  return (
    <div className='bg-[#2c3e50] h-[62px] rounded-lg mb-[38px] py-[8px] pr-[17px] pl-[0px] flex items-center'>
      <div className='w-[72px] h-[72px] bg-[#34495e] rounded-lg flex items-center justify-center mr-4'>
        {icon}
      </div>
      <div className='flex-grow flex justify-between items-center'>
        <div>
          <span className='text-white font-bold'>{name}</span>
          <div className='text-[#bdc3c7] text-sm mt-1'>{desc}</div>
        </div>
        <span className={`text-[#000000] font-bold bg-[${backgroundColor}] cursor-pointer rounded-[22px] py-[7px] px-[15px]`}
          onClick={handleClick}>
          {award}
        </span>
      </div>
    </div>
  )
}

const Task = () => {
  //新版-begin
  //1-begin: 当日签到(改为根据状态来设置按钮的样子， 和设置按钮所触发的函数)
  //useState useAuth等usexxx，都只能在组件的顶层使用，不能在函数内部去使用。不能在useEffect中使用.
  //任务1001-"每日签到"的状态
  const [currentState, setCurrentState] = useState<string>('');
  //任务1002-"七天签到"的状态
  const [currentState7, setCurrentState7] = useState<string>('');
  //任务1003-"关注推特"的状态
  const [currentStatef, setCurrentStatef] = useState<string>('');
  // 监听storage获取登录状态
  //const [account, setAccount] = useStorage('account');//得到的account是null
  //console.log('-----------33333333355555555555', account);
  const [account3, setAccount3] = useState<User>(null);
  //const { user, logout } = useAuth(); 
  //const [handleClick1_1, setHandleClick1_1] = useState(() => { });

  const handleClick1_0 = () => { };
  //按钮上的背景色和字
  const [award1, setAward1] = useState('Finish');
  const [b1, setB1] = useState('#BCF804');
  const [award2, setAward2] = useState('Claim');
  const [b2, setB2] = useState('#ccc');
  const [award3, setAward3] = useState('Follow');
  const [b3, setB3] = useState('#BCF804');
  //邀请码
  const [inviteCode, setInviteCode] = useState('1122');

  useEffect(() => {
    // chrome.storage.local.get("account", (result) => {
    //   const account2 = result.account; // 读取存储中的 account 值
    //   if (account2) {
    //     console.log("------------------------##Account2222:", account2);
    //     setAccount3(account2);
    //     console.log("------------------------##Account3333:", account3);
    //   } else {
    //     console.log("------------------------##No account found in storage.");
    //   }
    // });
    chrome.storage.local.get(["account", "accountStoredTime"], (result) => {
      if (result.account && result.accountStoredTime) {
        const currentTime = Date.now();
        const oneDayInMillis = 24 * 60 * 60 * 1000; // 一天的毫秒数
        if (currentTime - result.accountStoredTime > oneDayInMillis) {
          // 超过一天，清除存储
          chrome.storage.local.remove("account");
          chrome.storage.local.remove("accountStoredTime");
        } else {
          setAccount3(result.account);
        }
      }
    })
  }, []);

  //页面初始化的时候执行
  useEffect(() => {
    console.log((account3?.userId), '--555555555555555555555555=', account3);
    // 获取“每日签到”这个任务的当前状态
    //访问“查询每日签到”接口。。。。
    let con_currentState = '';
    let con_currentState7 = '';
    let con_currentStatef = '';
    // 修改此处的条件判断，判断account3不为null且是包含属性的对象时执行后续逻辑
    if (account3 !== null &&
      (account3.userId !== null &&
        account3.token !== null)) {
      console.log((account3.token), '--6666666666666666666666=', account3.userId);
      const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
      // 创建请求对象
      const request = new proto.pb.GetTaskStatusReq();
      //从"全局上下文"中获取account信息
      /**
      type User = {
      userId: string;
      token: string;
      nickname: string;
      avatarUrl: string;
      twitterUsername: string;
      }|null */
      //const request = { task_id: '1001' };
      request.setTaskId(1001);
      //const metadata = {};
      console.log('---------w4444444444444444444444444account=', account3);
      const metadata: { [x: string]: string } = {
        'user-id': account3?.userId + '',
        'token': account3?.token + '',
        'device-id': '0',
      };

      // 调用服务方法获取"每日签到这个任务的状态"：currentState
      //client.getTaskStatus();
      client.getTaskStatus(request, metadata, (err, response) => {
        if (err) {
          console.error('#####33333333333333333333333333Error:', err.message);
          alert(err.message);
          return;
        } else {
          //暂时先让他跳转， 实际应该使用redux来共享这个account数据， 在inpage.ts的监听器中设置redux中的setAccount 
          console.log('#####3333333333333333333333333333333333333333before..............redux..................');
          //setAccount('result.data');
          console.log('#####3333333333333333333333Response:', response.toObject());
          //alert(response.toObject());
          if (response.toObject().code === 0) {
            con_currentState = response.toObject().status + '';
            setCurrentState(con_currentState);
            //--------------------改变按钮样式-begin
            console.log(con_currentState, '-con_currentState === ?');
            if (con_currentState === '1') {
              console.log(con_currentState, '-con_currentState === 1');
              // taskList[0].backgroundColor = '#BCF804';
              // taskList[0].award = 'Finish';
              // taskList[0].handleClick = handleClick1_1;
              setB1('#BCF804');
              setAward1('Finish');
            } else if (con_currentState === '3') {
              console.log(con_currentState, '-con_currentState === 3');
              // taskList[0].backgroundColor = '#BCF804';
              // taskList[0].award = 'Claim';
              // taskList[0].handleClick = handleClick1_1;
              setB1('#BCF804');
              setAward1('Claim');
            } else if (con_currentState === '4') {
              console.log(con_currentState, '-con_currentState === 4');
              //taskList[0].backgroundColor = '#ccc';
              //taskList[0].award = 'Claim';
              //taskList[0].handleClick = handleClick1_1;
              setB1('#ccc');
              setAward1('Claim');
              //状态为“已经领取完积分”的时候， 不做任何事情
            }
            //--------------------改变按钮样式-end
            console.log(currentState, '-getTaskStatus--means:', response.toObject().message);
          } else {
            console.log('-getTaskStatus--errormessage:', response.toObject().message);
          }
        }
      });
      //连续七天签到： currentState7
      request.setTaskId(1002);
      client.getTaskStatus(request, metadata, (err, response) => {
        if (err) {
          console.error('#####333333333333currentState733333333333333Error:', err.message);
        } else {
          console.log('#####33333333333333currentState733333333Response:', response.toObject());
          if (response.toObject().code === 0) {
            con_currentState7 = response.toObject().status + '';
            setCurrentState7(con_currentState7);
            //--------------------改变按钮样式-begin
            if (con_currentState7 === '1') {
              // taskList[1].backgroundColor = '#ccc';
              // taskList[1].award = 'Claim';
              // taskList[1].handleClick = handleClick1_2;
              setB2('#ccc');
              setAward2('Claim');
            } else if (con_currentState7 === '3') {
              // taskList[1].backgroundColor = '#BCF804';
              // taskList[1].award = 'Claim';
              // taskList[1].handleClick = handleClick1_2;
              setB2('#BCF804');
              setAward2('Claim');
            } else if (con_currentState7 === '4') {
              // taskList[1].backgroundColor = '#ccc';
              // taskList[1].award = 'Claim';
              // taskList[1].handleClick = handleClick1_2;
              setB2('#ccc');
              setAward2('Claim');
              //状态为“已经领取完积分”的时候， 不做任何事情
            }
            //--------------------改变按钮样式-end
            console.log(currentState7, '-getTaskStatus-currentState7-means:', response.toObject().message);
          } else {
            console.log('-getTaskStatus-currentState7-errormessage:', response.toObject().message);
          }
        }
      });
      //关注xchat的twitter账号： currentStatef
      request.setTaskId(1003);
      client.getTaskStatus(request, metadata, (err, response) => {
        if (err) {
          console.error('#####333333333333currentStatef3333333333333Error:', err.message);
        } else {
          console.log('#####33333333333333currentStatef3333333Response:', response.toObject());
          if (response.toObject().code === 0) {
            con_currentStatef = response.toObject().status + '';
            setCurrentStatef(con_currentStatef);
            //--------------------改变按钮样式-begin
            if (con_currentStatef === '1') {
              // taskList[2].backgroundColor = '#BCF804';
              // taskList[2].award = 'Follow';
              // taskList[2].handleClick = handleClick1_3;
              setB3('#BCF804');
              setAward3('Follow');
            } else if (con_currentStatef === '3') {
              // taskList[2].backgroundColor = '#BCF804';
              // taskList[2].award = 'Claim';
              // taskList[2].handleClick = handleClick1_3;
              setB3('#BCF804');
              setAward3('Claim');
            } else if (con_currentStatef === '4') {
              // taskList[2].backgroundColor = '#ccc';
              // taskList[2].award = 'Claim';
              // taskList[2].handleClick = handleClick1_3;
              setB3('#ccc');
              setAward3('Claim');
              //状态为“已经领取完积分”的时候， 不做任何事情
            }
            //--------------------改变按钮样式-end
            console.log(currentStatef, '-getTaskStatus-currentStatef-means:', response.toObject().message);
          } else {
            console.log('-getTaskStatus-currentStatef-errormessage:', response.toObject().message);
          }
        }
      });
      //把“用户account中的邀请码”写入到state变量中去： 
      setInviteCode(account3?.userInfo?.inviteCode + '');
    }
  }, [account3]);


  const handleClick1_1 = () => {
    //alert('currentState=' + currentState);
    console.log(currentState === '1', '-getTaskStatus--222222-means:');
    //alert('account3=' + account3);
    if (currentState === '1') {
      console.log(currentState === '1', '-getTaskStatus--currentState1:');
      //访问"执行每日签到"接口。。。。。。。。。。。。。。。
      const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
      // 创建请求对象
      //const request = new proto.pb.DailySignInReq();
      const request = new Empty();
      const metadata: { [x: string]: string } = {
        'user-id': account3?.userId + '',
        'token': account3?.token + '',
        'device-id': '0',
      };
      // 调用服务方法
      //client.getTaskStatus();
      client.dailySignIn(request, metadata, (err, response) => {
        if (err) {
          console.error('#####33333333333333333333333333Error-dailySignIn:', err.message);
          alert(err.message);
          return;
        } else {
          console.log('msg=', response.toObject().message);
          if (response.toObject().code === 0) {
            //如果访问接口成功， 执行下面动作： 将状态设置为“等待领取积分”，修改按钮样式和触发函数
            setCurrentState('3');
            //如果访问"执行每日签到"接口时，抛出异常， 则setCurrentState('1');不修改按钮样式和触发函数。。。。。。。。。
            // taskList[0].backgroundColor = '#BCF804';
            // taskList[0].award = 'Claim';
            // taskList[0].handleClick = handleClick1_1;
            setB1('#BCF804');
            setAward1('Claim');
            console.log('3', '-dailySignIn--means:', response.toObject().message);
          } else {
            console.log('---dailySignIn-errormessage is:', response.toObject().message);
          }
        }
      });
    } else if (currentState === '3') {
      console.log(currentState === '3', '-getTaskStatus--currentState3:');
      //访问"执行领取积分"接口。。。。。。。。。。。。。
      const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
      // 创建请求对象
      const request = new proto.pb.ClaimTaskRewardReq();
      request.setTaskId(1001);
      //const request = new Empty();
      const metadata: { [x: string]: string } = {
        'user-id': account3?.userId + '',
        'token': account3?.token + '',
        'device-id': '0',
      };
      // 调用服务方法
      //client.getTaskStatus();
      client.claimTaskReward(request, metadata, (err, response) => {
        if (err) {
          //如果访问"执行领取积分"接口时，抛出异常， 则setCurrentState('3');不修改按钮样式和触发函数。。。。。。。。。    
          console.error('#####333333333333claimTaskReward33333333333333Error:', err.message);
        } else {
          console.log('msg=', response.toObject().message);
          if (response.toObject().code === 0) {
            //如果访问"执行领取积分"接口成功， 执行下面动作： 将状态设置为“已经领取积分”，修改按钮样式和触发函数
            setCurrentState('4');
            // taskList[0].backgroundColor = '#ccc';
            // taskList[0].award = 'Claim';
            // taskList[0].handleClick = handleClick1_1;
            setB1('#ccc');
            setAward1('Claim');
            console.log('4', '-claimTaskReward--means:', response.toObject().message);
            alert(response.toObject().message);
          } else {
            //如果访问"执行领取积分"接口时，抛出异常， 则setCurrentState('3');不修改按钮样式和触发函数。。。。。。。。。      
            console.log('---claimTaskReward-errormessage is:', response.toObject().message);
          }
        }
      });
    } else if (currentState === '4') {
      console.log(currentState === '4', '-getTaskStatus--currentState4:');
      //状态为“已经领取完积分”的时候， 不做任何事情
    }
  };

  //"七天签到"的按钮点击
  const handleClick1_2 = () => {
    //alert('currentState7=' + currentState7);
    console.log(currentState7 === '1', '-getTaskStatus--currentState7-means:', currentState7);
    //alert('account3=' + account3);
    if (currentState7 === '1') {
      console.log(currentState7 === '1', '-has yet enought 7,getTaskStatus--currentState7:1');
      // taskList[1].backgroundColor = '#ccc';
      // taskList[1].award = 'Claim';
      // taskList[1].handleClick = handleClick1_2;
      // setB2('#ccc');
      // setAward2('Claim');
      console.log('1', '-has yet enought 7,-claimTaskReward-currentState7-means:');
    } else if (currentState7 === '3') {
      console.log(currentState7 === '3', '-getTaskStatus-currentState7-currentState3:3');
      //访问"执行领取积分"接口。。。。。。。。。。。。。
      const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
      // 创建请求对象
      const request = new proto.pb.ClaimTaskRewardReq();
      request.setTaskId(1002);
      //const request = new Empty();
      const metadata: { [x: string]: string } = {
        'user-id': account3?.userId + '',
        'token': account3?.token + '',
        'device-id': '0',
      };
      // 调用服务方法
      //client.getTaskStatus();
      client.claimTaskReward(request, metadata, (err, response) => {
        if (err) {
          //如果访问"执行领取积分"接口时，抛出异常， 则setCurrentState('3');不修改按钮样式和触发函数。。。。。。。。。    
          console.error('#####333333333333claimTaskReward3333333currentState73333333Error:', err.message);
        } else {
          console.log('msg=', response.toObject().message);
          if (response.toObject().code === 0) {
            //如果访问"执行领取积分"接口成功， 执行下面动作： 将状态设置为“已经领取积分”，修改按钮样式和触发函数
            setCurrentState7('4');
            // taskList[1].backgroundColor = '#ccc';
            // taskList[1].award = 'Claim';
            // taskList[1].handleClick = handleClick1_2;
            setB2('#ccc');
            setAward2('Claim');
            console.log('4', '-claimTaskReward-currentState7-777777777777788888888means:', response.toObject().message);
            alert(response.toObject().message);
          } else {
            //如果访问"执行领取积分"接口时，抛出异常， 则setCurrentState('3');不修改按钮样式和触发函数。。。。。。。。。      
            console.log('---claimTaskReward-errormessage currentState7 is:', response.toObject().message);
          }
        }
      });
    } else if (currentState7 === '4') {
      console.log(currentState, '-getTaskStatus-currentState7-currentState4:');
      //状态为“已经领取完积分”的时候， 不做任何事情
    }
  };

  //"关注twitter"的按钮点击
  const handleClick1_3 = () => {
    if (account3?.userInfo?.twitterUsername) {
      console.log('account3?.userInfo??.twitterUsername is' + account3?.userInfo?.twitterUsername);
      //alert('currentStatef=' + currentStatef);
      console.log(currentStatef, '-getTaskStatus--currentStatef-means:');
      //alert('account3=' + account3);
      if (currentStatef === '1') {
        console.log(currentStatef === '1', '-getTaskStatus-currentStatef:1');
        //访问"执行关注twitter"接口。。。。。。。。。。。。。。。
        const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
        // 创建请求对象
        //const request = new proto.pb.DailySignInReq();
        const request = new Empty();
        const metadata: { [x: string]: string } = {
          'user-id': account3?.userId + '',
          'token': account3?.token + '',
          'device-id': '0',
        };
        // 调用服务方法
        //client.getTaskStatus();
        client.followTwitter(request, metadata, (err, response) => {
          if (err) {
            console.error('#####33333333333currentStatef33333333Error:', err.message);
            alert(err.message);
            return;
          } else {
            console.log('currentStatef-msg=', response.toObject().message);
            if (response.toObject().code === 0) {
              //如果访问接口成功， 执行下面动作： 将状态设置为“等待领取积分”，修改按钮样式和触发函数
              setCurrentStatef('3');
              //如果访问"执行每日签到"接口时，抛出异常， 则setCurrentState('1');不修改按钮样式和触发函数。。。。。。。。。
              // taskList[2].backgroundColor = '#BCF804';
              // taskList[2].award = 'Claim';
              // taskList[2].handleClick = handleClick1_3;
              setB3('#BCF804');
              setAward3('Claim');
              chrome.runtime.sendMessage({ action: 'createTab', url: 'https://x.com/XChat_Official' });
              console.log('3', '-dailySignIn-currentStatef-means:', response.toObject().message);
            } else {
              console.log('---dailySignIn-currentStatef-errormessage is:', response.toObject().message);
            }
          }
        });
      } else if (currentStatef === '3') {
        console.log(currentStatef, '-getTaskStatus-currentStatef-currentState:3');
        //访问"执行领取积分"接口。。。。。。。。。。。。。
        const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
        // 创建请求对象
        const request = new proto.pb.ClaimTaskRewardReq();
        request.setTaskId(1003);
        //const request = new Empty();
        const metadata: { [x: string]: string } = {
          'user-id': account3?.userId + '',
          'token': account3?.token + '',
          'device-id': '0',
        };
        // 调用服务方法
        //client.getTaskStatus();
        client.claimTaskReward(request, metadata, (err, response) => {
          if (err) {
            //如果访问"执行领取积分"接口时，抛出异常， 则setCurrentState('3');不修改按钮样式和触发函数。。。。。。。。。    
            console.error('#####333333333333claimTaskReward333333currentStatef33333333Error:', err.message);
          } else {
            console.log('currentStatef-msg=', response.toObject().message);
            if (response.toObject().code === 0) {
              //如果访问"执行领取积分"接口成功， 执行下面动作： 将状态设置为“已经领取积分”，修改按钮样式和触发函数
              setCurrentStatef('4');
              // taskList[2].backgroundColor = '#ccc';
              // taskList[2].award = 'Claim';
              // taskList[2].handleClick = handleClick1_3;
              setB3('#ccc');
              setAward3('Claim');
              //这里还需要: 显示给用户他“领取到了多少积分”： alert()---------????
              console.log('4', '-claimTaskReward-currentStatef-means:', response.toObject().message);
              alert(response.toObject().message);
            } else {
              //如果访问"执行领取积分"接口时，抛出异常， 则setCurrentState('3');不修改按钮样式和触发函数。。。。。。。。。      
              console.log('---claimTaskReward-currentStatef-errormessage is:', response.toObject().message);
            }
          }
        });
      } else if (currentStatef === '4') {
        console.log(currentStatef, '-getTaskStatus-currentStatef-currentStatef:4');
        //状态为“已经领取完积分”的时候， 不做任何事情
      }
    } else {
      console.log('twitterUsername=' + account3?.userInfo?.twitterUsername + '=>account3?.userInfo?.twitterUsername === null');
      getTwitterAuthorizeURL(account3?.userInfo?.walletAddress + '');
    }
  };

  //1-end:   当日签到
  //新版-end
  // //1-begin: 当日签到
  // const [isClickedToday, setIsClickedToday] = useState<boolean>(false);
  // const [currentDate, setCurrentDate] = useState<string>('');
  // useEffect(() => {
  //     // 获取当前日期
  //     const today = new Date();
  //     const dateString = today.toISOString().split('T')[0];
  //     setCurrentDate(dateString);
  //     // 从localStorage中获取之前保存的点击日期
  //     const storedDate = localStorage.getItem('lastClickedDate');
  //     if (storedDate === dateString) {
  //         setIsClickedToday(true);
  //     }
  // }, []);
  // const handleClick1 = () => {
  //     if(!isClickedToday) {
  //       // 将点击状态和当前日期保存到localStorage
  //       //localStorage.setItem('isClicked', 'true');
  //       localStorage.setItem('lastClickedDate', currentDate);
  //       // 替换state状态
  //       setIsClickedToday(true);
  //     } else {
  //       alert('已经点击过当日签到了');
  //     }
  // };
  // const backgroundColor1 = isClickedToday? '#ccc' : '#BCF804';
  // //1-end:   当日签到
  // //2-begin: 连续七天签到
  // const [spanBgColor, setSpanBgColor] = useState<string>('');
  // const [isLoggedInSevenDays, setIsLoggedInSevenDays] = useState<boolean>(false);
  // useEffect(() => {
  //   // 从localStorage获取连续登录天数
  //   const consecutiveLoginDays = localStorage.getItem('consecutiveLoginDays');
  //   if (consecutiveLoginDays && parseInt(consecutiveLoginDays) >= 7) {
  //     setIsLoggedInSevenDays(true);
  //     setSpanBgColor('#BCF804');
  //   } else {
  //     setIsLoggedInSevenDays(false);
  //     setSpanBgColor('#ccc');
  //   }
  // }, []);
  // const handleSpanClick = () => {
  //   if (isLoggedInSevenDays) {
  //     // 将连续登录天数清零并存入localStorage
  //     localStorage.setItem('consecutiveLoginDays', '0');
  //     // 替换state状态
  //     setIsLoggedInSevenDays(false);
  //     // 将背景色设置为灰色
  //     setSpanBgColor('#ccc');
  //   } else {
  //     alert('已经点击过连续7日签到了');
  //   }
  // };
  // //2-end: 连续七天签到
  // //3-begin: 关注xchart在twitter上的账号
  // const [spanBgColor_follow, setSpanBgColor_follow] = useState<string>('#BCF804');
  // const [isFollowed, setIsFollowed] = useState<boolean>(false);
  // useEffect(() => {
  //   // 从localStorage获取"是否已经关注"  
  //   const storedValue = localStorage.getItem('isFollowed');
  //   //同步按钮的背景色
  //   if (storedValue === 'true') {
  //     setSpanBgColor_follow('#ccc');
  //   } else if (storedValue === 'false') {
  //     setSpanBgColor_follow('#BCF804');
  //   } else {
  //     //这里约定，后台只能返回true或者false的字符串
  //     //alert('error');//这里不能这么写， 因为页面第一次加载的时候，就会执行到这里。
  //     console.log('do not set SpanBgColor_follow, because localStorage.getItem(isFollowed)=' + storedValue);
  //   }
  //   //同步数据库中的“关注状态”到前端
  //   if (storedValue === 'true') {
  //     setIsFollowed(true);
  //   } else if (storedValue === 'false') {
  //     setIsFollowed(false);
  //   } else {
  //     console.log('do not set isfollowed, because localStorage.getItem(isFollowed)=' + storedValue);
  //   }
  // }, []);
  // const handleSpanClick_follow = () => {
  //   if (!isFollowed) {
  //     // 发送请求:  让后台去设置该用户关注xchart的twitter账号;  并将"该用户的已关注状态"存入数据库
  //     alert('发送请求, 让后台去设置该用户关注xchart的twitter账号；并将"已关注状态"存入数据库');
  //     // 替换state
  //     setIsFollowed(true);
  //     // 将背景色设置为灰色
  //     setSpanBgColor_follow('#ccc');
  //     // 页面跳转到“twitter关注页面”
  //     //chrome.tabs.create({ url: 'https://x.com' });
  //     //chrome.tabs.create({ url: 'https://x.com/XChat_Official' });
  //     chrome.runtime.sendMessage({ action: 'createTab', url: 'https://x.com/XChat_Official' });
  //     //chrome.runtime.sendMessage({ action: 'createTab', url: 'https://x.com' });
  //     // window.postMessage({
  //     //   target: 'createTab',
  //     //   url: 'https://x.com'
  //     // })
  //     //console.log('55='+chrome);//object
  //     //console.log('100='+chrome.tabGroups);//100=undefied
  //     //==>无法在index redirect background这3个页面以外的其他页面上使用chrome.tabs，
  //     //其他页面上的chrome.tabs都是undefined, 
  //     //只能给background页面中注册的监听器发消息，让background页面中的监听器来做这件事情：chrome.tabs.create('https://x.com/XChat_Official');
  //   } else {
  //     console.log('user has already focus account of xchart in twitter');
  //   }
  // };
  // //3-end: 关注xchart在twitter上的账号
  //4-begin: 是否已经邀请过好友（好友是否已经使用过他的邀请码）
  const [spanBgColor_invite, setSpanBgColor_invite] = useState<string>('#BCF804');
  const [isInvited, setIsInvited] = useState<boolean>(false);
  useEffect(() => {
    // 从localStorage获取"是否已经邀请过好友"  
    const storedValue = localStorage.getItem('isInvited');
    //同步按钮的背景色
    if (storedValue === 'true') {
      setSpanBgColor_invite('#ccc');
    } else if (storedValue === 'false') {
      setSpanBgColor_invite('#BCF804');
    } else {
      //这里约定，后台只能返回true或者false的字符串
      //alert('error');//这里不能这么写， 因为页面第一次加载的时候，就会执行到这里。
      console.log('do not set SpanBgColor_invite, because localStorage.getItem(isInvited)=' + storedValue);
    }
    //同步数据库中的“关注状态”到前端
    if (storedValue === 'true') {
      setIsInvited(true);
    } else if (storedValue === 'false') {
      setIsInvited(false);
    } else {
      console.log('do not set isinviteed, because localStorage.getItem(isInvited)=' + storedValue);
    }
  }, []);
  //邀请码begin
  const CreateInviteBtn = forwardRef<HTMLButtonElement, { onClick?: () => void }>(
    ({ onClick }, ref) => {
      return (
        <Button
          ref={ref}
          className={`text-[#000000] font-bold bg-[${spanBgColor_invite}] cursor-pointer rounded-[22px] py-[7px] px-[15px]`}
          //className='h-[61px] w-[208px]'
          onClick={onClick}
          disabled={isInvited}
        //variant={'pixel'}
        >
          {'Show Code'}
          {/* <div className='absolute w-full h-full flex items-center justify-center pointer-events-none z-10 font-bold'>
              Show Code
            </div> */}
        </Button>
      )
    },
  )
  CreateInviteBtn.displayName = 'CreateInviteBtn'
  //邀请码end
  // const handleSpanClick_invite = () => {
  //     if (!isInvited) {
  //         // 替换state
  //         setIsInvited(true);
  //         // 将背景色设置为灰色
  //         setSpanBgColor_invite('#ccc');
  //         // 弹出“复制请求码”页面

  //     } else {
  //         console.log('user has already invited friend');
  //     }
  // };
  //4-end: 是否已经邀请过好友（好友是否已经使用过他的邀请码）
  //5-begin: 弹出输入“邀请码”的页面-开始
  const [isInvitationCodeInputOpen, setIsInvitationCodeInputOpen] = useState(false)
  const handleInvitationCodeInputSubmit2 = (code: string) => {
    //向后端发送“使用邀请码”的请求-begin
    //访问"执行使用邀请码"接口。。。。。。。。。。。。。
    //continue-begin
    if (code.trim().length > 0) {
      console.log('Invitation code submitted:', code);
      if (code.trim() === (account3?.userInfo?.inviteCode + '')) {
        alert('Unable to redeem your own invitation code');
      } else {
        const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
        // 创建请求对象
        const request = new proto.pb.FillInviteCodeReq();
        request.setInviteCode(code);
        //const request = new Empty();
        const metadata: { [x: string]: string } = {
          'user-id': account3?.userId + '',
          'token': account3?.token + '',
          'device-id': '0',
        };
        // 调用"执行使用邀请码"服务方法
        //client.getTaskStatus();
        client.fillInviteCode(request, metadata, (err, response) => {
          if (err) {
            //如果访问"执行使用邀请码"接口时，抛出异常，  则：     反馈给用户失败的原因
            alert(err.message);
            console.error('#####333333333333fillInvite333333373333333Error:', err.message);
          } else {
            console.log('fillInvite-msg=', response.toObject().message);
            alert(response.toObject().message);
            if (response.toObject().code === 0) {
              //如果访问"执行使用邀请码"接口成功， 执行下面动作： 反馈给用户成功
              console.log('4', '-fillInvite-fillInvite-777777777777788888888means:', response.toObject().message);
            } else {
              //如果访问"执行使用邀请码"接口时，不成功， 则：     反馈给用户失败的原因 
              console.log('---fillInvite-errormessage fillInvite is:', response.toObject().message);
            }
          }
        });
      }
    }
    //continue-end
    //向后端发送“使用邀请码”的请求-end
    setIsInvitationCodeInputOpen(false);
  }


  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [tokenAddress, setTokenAddress] = useState("");
  const [totalSupply, setTotalSupply] = useState("1000000"); // 默认供应量
  const [amountToken, setAmountToken] = useState("100");
  const [amountETH, setAmountETH] = useState("0.1");

  const request_js2 = new WindowPostMessage({
    name: 'x-wallet-sidepanel2',
    target: 'x-wallet-inpage',
  })

  //1. 部署“代币合约”(部署的时候会执行构造函数，构造函数里面会mint用户指定的多少个币)==>返回“合约对象”： 代币合约的地址
  //2. 调用“uniswaf合约”： 代币合约的地址，发币人的钱包的公钥地址, 发了多少个币折算成token， 发了多少个币折算成eth  ,weth地址 
  const approveAndSwap = async (wallet: string, tokenName: string, total_token: string, total_eth: string) => {
    console.log('111-task-www1');
    try {
      //wallet = 'MetaMask';
      //wallet = 'OKX Wallet';
      const nonce = 1;
      const result = await request_js2.send({
        method: 'approveAndSwap',
        data: {
          wallet,
          nonce,
          type: 'wallet',
          tokenName,
          tokenSymbol: tokenName,
          total_token,
          total_eth
        },
      });
      //这里不再接收响应了，以内在inpagecontroller.ts中，在处理完上面的请求后，将结果发送到了content.ts中， 所以去content.ts中去找响应：这句代码： else if (type === "updateAddress") 
    } catch (error: unknown) {
      console.error(error);
    }
  }
  const handleInvitationCodeInputSubmit = (tokenName: string, tokenSupply: string, ethAmount: string) => {
    approveAndSwap('OKX Wallet', tokenName, tokenSupply, ethAmount);
    //调用合约结束
    setIsInvitationCodeInputOpen(false);
  }
  const handleInvitationCodeInputCancel = () => {
    setIsInvitationCodeInputOpen(false)
  }
  const onOpenInvitationCodeInput = () => {
    setIsInvitationCodeInputOpen(true)
  }
  //5-end:   弹出输入“邀请码”的页面-结束


  // // 从localStorage中获取之前保存的点击日期
  // if (currentState === '1') {
  //   taskList[0].backgroundColor = '#BCF804';
  //   taskList[0].award = 'Finish';
  //   taskList[0].handleClick = handleClick1_1;
  // } else if (currentState === '3') {
  //   taskList[0].backgroundColor = '#BCF804';
  //   taskList[0].award = 'Claim';
  //   taskList[0].handleClick = handleClick1_1;
  // } else if (currentState === '4') {
  //   taskList[0].backgroundColor = '#ccc';
  //   taskList[0].award = 'Claim';
  //   taskList[0].handleClick = handleClick1_1;
  // } else {
  //   //alert('接口返回值错误.......');
  // }

  const taskList = [
    {
      icon: <GoldCoin coin={1} />,
      name: 'Daily Login',
      award: award1,
      desc: 'Welcome to XChat!',
      buttonText: 'Claim',
      buttonColor: '#adff2f',
      backgroundColor: b1,
      handleClick: handleClick1_1,
      // backgroundColor: backgroundColor1,
      // handleClick: handleClick1,
    },
    {
      icon: <Gift />,
      name: 'Consecutive Login',
      award: award2,
      desc: 'Log in for 7 consecutive days',
      buttonText: 'Claim',
      buttonColor: '#bdc3c7',
      backgroundColor: b2,
      handleClick: handleClick1_2,
      // backgroundColor: spanBgColor,
      // handleClick: handleSpanClick,
    },
    {
      icon: <GoldCoin coin={50} />,
      name: 'Follow XChat',
      award: award3,
      desc: 'Follow us on X!',
      buttonText: 'Claim',
      buttonColor: '#adff2f',
      backgroundColor: b3,
      handleClick: handleClick1_3,
      // backgroundColor: spanBgColor_follow,
      // handleClick: handleSpanClick_follow,
    },
  ];
  const buttonText = 'Daily Task'
  const buttonColor = '#adff2f'
  return (
    <div>
      <div className='flex-1 overflow-auto px-6'>
        <div className='mb-6'>
          <PixelButton
            backgroundColor={buttonColor}
            onClick={() => { }}
            width={167}
            height={49}
          >
            {buttonText}
          </PixelButton>
        </div>
        {taskList.map((task, index) => (
          <TaskItem key={index} {...task} />
        ))}

        <div className='bg-[#2c3e50] h-[62px] rounded-lg mb-[38px] py-[8px] pr-[17px] pl-[0px] flex items-center'>
          <div className='w-[72px] h-[72px] bg-[#34495e] rounded-lg flex items-center justify-center mr-4'>
            <GoldCoin coin={50} />
          </div>
          <div className='flex-grow flex justify-between items-center'>
            <div>
              <span className='text-white font-bold'>{'Invite Friends'}</span>
              <div className='text-[#bdc3c7] text-sm mt-1'>{'Invite your friends to XChat!'}</div>
            </div>
            {/* <span className={`text-[#000000] font-bold bg-[${'#adff2f'}] cursor-pointer rounded-[22px] py-[7px] px-[15px]`}
                  //onClick={handleClick}
                  > */}
            <CreateInviteCodeDialog trigger={<CreateInviteBtn />} invite_code={inviteCode} />
            {/* </span> */}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-gray-800 h-[93px]'>
        {(
          <PixelButton onClick={onOpenInvitationCodeInput} {...{
            backgroundColor: '#adff2f',
            textColor: '#000000',
            //children: 'Get an Invitation Code?',
            children: 'Create Token',
            width: 331,
            height: 61,
          }} />
        )}
      </div>
      {/* <InvitationCodeInput
        isOpen={isInvitationCodeInputOpen}
        onSubmit={handleInvitationCodeInputSubmit}
        onCancel={handleInvitationCodeInputCancel}
      /> */}
      <CreateToken
        isOpen={isInvitationCodeInputOpen}
        onSubmit={handleInvitationCodeInputSubmit}
        onCancel={handleInvitationCodeInputCancel}
      />
    </div>
  )
}

export default Task
