import React, { useState, useEffect } from 'react';
import PixelButton from '../components/PixelButton'
import GoldCoin from './gold_coin'
import Gift from './gift'
import { forwardRef} from 'react'
import { Button } from '~/components/ui/button'
import CreateInviteCodeDialog from './createInviteCodeDialog'
import InvitationCodeInput from '../components/InvitationCodeInput'

//grpc
import { BusinessExtClient } from '~/components/pages/unlock-page/business.ext_grpc_web_pb';// 服务类
//import { GetTaskStatusReq } from '~/components/pages/unlock-page/business.ext_pb'; 
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';// 使用 google.protobuf.Empty
import 'xhr2'; // 确保在 Node.js 环境中支持 XMLHttpRequest

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
    const [currentState, setCurrentState] = useState<string>('');
    useEffect(() => {
        // 获取“每日签到”这个任务的当前状态
        //访问“查询每日签到”接口。。。。
        const con_currentState = '';
        
    const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
    // 创建请求对象
    const request = new proto.pb.GetTaskStatusReq();
    request.setTaskId(1001);
    const metadata = null;
    //const request = { task_id: '1001' };
    // 调用服务方法
    //client.getTaskStatus();
    client.getTaskStatus(request, metadata, (err, response) => {
      if (err) {
        console.error('33333333333333333333333333Error:', err.message);
      } else {
        //暂时先让他跳转， 实际应该使用redux来共享这个account数据， 在inpage.ts的监听器中设置redux中的setAccount 
        console.log('3333333333333333333333333333333333333333before..............redux..................');
        //setAccount('result.data');
        console.log('3333333333333333333333Response:', response.toObject());
        alert(response.toObject());
        //con_currentState = response.toObject();
      }
    });
        
        setCurrentState(con_currentState);
        // 从localStorage中获取之前保存的点击日期
        if (currentState === '1') {
          taskList[0].backgroundColor='#BCF804';
          taskList[0].award = 'Sign';
          taskList[0].handleClick = handleClick1_1;
        } else if (currentState === '3') {
          taskList[0].backgroundColor='#BCF804';
          taskList[0].award = 'Claim';
          taskList[0].handleClick = handleClick1_1;
        } else if (currentState === '4') {
          taskList[0].backgroundColor='#ccc';
          taskList[0].award = 'Claim';
          taskList[0].handleClick = handleClick1_1;
        } else {
          alert('接口返回值错误.......');
        }
    }, []);
    const handleClick1_1 = () => {
      if (currentState === '1') {
        //访问"执行每日签到"接口。。。。。。。。。。。。。。。

        //如果访问接口成功， 执行下面动作： 将状态设置为“等待领取积分”，修改按钮样式和触发函数
        setCurrentState('3'); 
        //如果访问"执行每日签到"接口时，抛出异常， 则setCurrentState('1');不修改按钮样式和触发函数。。。。。。。。。
        taskList[0].backgroundColor='#BCF804';
        taskList[0].award = 'claim';
        taskList[0].handleClick = handleClick1_1;
      } else if (currentState === '3') {
        //访问"执行领取积分"接口。。。。。。。。。。。。。
        
        //如果访问"执行领取积分"接口成功， 执行下面动作： 将状态设置为“已经领取积分”，修改按钮样式和触发函数
        setCurrentState('4');
        taskList[0].backgroundColor='#BCF804';
        taskList[0].award = 'claim';
        taskList[0].handleClick = handleClick1_1;
        //如果访问"执行领取积分"接口时，抛出异常， 则setCurrentState('3');不修改按钮样式和触发函数。。。。。。。。。

      } else if (currentState === '4') {
        //状态为“已经领取完积分”的时候， 不做任何事情
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
    //2-begin: 连续七天签到
    const [spanBgColor, setSpanBgColor] = useState<string>('');
    const [isLoggedInSevenDays, setIsLoggedInSevenDays] = useState<boolean>(false);
    useEffect(() => {
        // 从localStorage获取连续登录天数
        const consecutiveLoginDays = localStorage.getItem('consecutiveLoginDays');
        if (consecutiveLoginDays && parseInt(consecutiveLoginDays) >= 7) {
            setIsLoggedInSevenDays(true);
            setSpanBgColor('#BCF804');
        } else {
            setIsLoggedInSevenDays(false);
            setSpanBgColor('#ccc');
        }
    }, []);
    const handleSpanClick = () => {
        if (isLoggedInSevenDays) {
            // 将连续登录天数清零并存入localStorage
            localStorage.setItem('consecutiveLoginDays', '0');
            // 替换state状态
            setIsLoggedInSevenDays(false);
            // 将背景色设置为灰色
            setSpanBgColor('#ccc');
        } else {
          alert('已经点击过连续7日签到了');
        }
    };
    //2-end: 连续七天签到
    //3-begin: 关注xchart在twitter上的账号
    const [spanBgColor_follow, setSpanBgColor_follow] = useState<string>('#BCF804');
    const [isFollowed, setIsFollowed] = useState<boolean>(false);
    useEffect(() => {
        // 从localStorage获取"是否已经关注"  
        const storedValue  = localStorage.getItem('isFollowed');
        //同步按钮的背景色
        if (storedValue === 'true') {
          setSpanBgColor_follow('#ccc');
        } else if (storedValue === 'false') {
          setSpanBgColor_follow('#BCF804');
        } else {
          //这里约定，后台只能返回true或者false的字符串
          //alert('error');//这里不能这么写， 因为页面第一次加载的时候，就会执行到这里。
          console.log('do not set SpanBgColor_follow, because localStorage.getItem(isFollowed)='+storedValue);
        }
        //同步数据库中的“关注状态”到前端
        if (storedValue === 'true') {
            setIsFollowed(true);
        } else if (storedValue === 'false') {
            setIsFollowed(false);
        } else {
          console.log('do not set isfollowed, because localStorage.getItem(isFollowed)='+storedValue);
        }
    }, []);
    const handleSpanClick_follow = () => {
        if (!isFollowed) {
            // 发送请求:  让后台去设置该用户关注xchart的twitter账号;  并将"该用户的已关注状态"存入数据库
            alert('发送请求, 让后台去设置该用户关注xchart的twitter账号；并将"已关注状态"存入数据库');
            // 替换state
            setIsFollowed(true);
            // 将背景色设置为灰色
            setSpanBgColor_follow('#ccc');
            // 页面跳转到“twitter关注页面”
            //chrome.tabs.create({ url: 'https://x.com' });
            //chrome.tabs.create({ url: 'https://x.com/XChat_Official' });
            chrome.runtime.sendMessage({ action: 'createTab', url: 'https://x.com/XChat_Official' });
            //chrome.runtime.sendMessage({ action: 'createTab', url: 'https://x.com' });
            // window.postMessage({
            //   target: 'createTab',
            //   url: 'https://x.com'
            // })
            //console.log('55='+chrome);//object
            //console.log('100='+chrome.tabGroups);//100=undefied
            //==>无法在index redirect background这3个页面以外的其他页面上使用chrome.tabs，
            //其他页面上的chrome.tabs都是undefined, 
            //只能给background页面中注册的监听器发消息，让background页面中的监听器来做这件事情：chrome.tabs.create('https://x.com/XChat_Official');
        } else {
            console.log('user has already focus account of xchart in twitter');
        }
    };
    //3-end: 关注xchart在twitter上的账号
    //4-begin: 是否已经邀请过好友（好友是否已经使用过他的邀请码）
    const [spanBgColor_invite, setSpanBgColor_invite] = useState<string>('#BCF804');
    const [isInvited, setIsInvited] = useState<boolean>(false);
    useEffect(() => {
        // 从localStorage获取"是否已经邀请过好友"  
        const storedValue  = localStorage.getItem('isInvited');
        //同步按钮的背景色
        if (storedValue === 'true') {
          setSpanBgColor_invite('#ccc');
        } else if (storedValue === 'false') {
          setSpanBgColor_invite('#BCF804');
        } else {
          //这里约定，后台只能返回true或者false的字符串
          //alert('error');//这里不能这么写， 因为页面第一次加载的时候，就会执行到这里。
          console.log('do not set SpanBgColor_invite, because localStorage.getItem(isInvited)='+storedValue);
        }
        //同步数据库中的“关注状态”到前端
        if (storedValue === 'true') {
            setIsInvited(true);
        } else if (storedValue === 'false') {
            setIsInvited(false);
        } else {
          console.log('do not set isinviteed, because localStorage.getItem(isInvited)='+storedValue);
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
    const handleInvitationCodeInputSubmit = (code: string) => {
      console.log('Invitation code submitted:', code)
      setIsInvitationCodeInputOpen(false)
    }
    const handleInvitationCodeInputCancel = () => {
      setIsInvitationCodeInputOpen(false)
    }
    const onOpenInvitationCodeInput = () => {
      setIsInvitationCodeInputOpen(true)
    }
    //5-end:   弹出输入“邀请码”的页面-结束
    
    const taskList = [
      {
        icon: <GoldCoin coin={1}/>,
        name: 'Daily Login',
        award: 'Claim',
        desc: 'Welcome to XChat!',
        buttonText: 'Claim',
        buttonColor: '#adff2f',
        backgroundColor: '#BCF804',
        handleClick: handleClick1_1,
        // backgroundColor: backgroundColor1,
        // handleClick: handleClick1,
      },
      {
        icon: <Gift/>,
        name: 'Consecutive Login',
        award: 'Claim',
        desc: 'Log in for 7 consecutive days',
        buttonText: 'Claim',
        buttonColor: '#bdc3c7',
        backgroundColor: spanBgColor,
        handleClick: handleSpanClick,
      },
      {
        icon: <GoldCoin coin={50}/>,
        name: 'Follow XChat',
        award: 'Claim',
        desc: 'Follow us on X!',
        buttonText: 'Claim',
        buttonColor: '#adff2f',
        backgroundColor: spanBgColor_follow,
        handleClick: handleSpanClick_follow,
      },
    ]
    const buttonText = 'Daily Task'
    const buttonColor = '#adff2f'
    return (
      <div>
      <div className='flex-1 overflow-auto px-6'>
        <div className='mb-6'>
          <PixelButton
            backgroundColor={buttonColor}
            onClick={() => {}}
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
          <GoldCoin coin={50}/>
          </div>
          <div className='flex-grow flex justify-between items-center'>
            <div>
              <span className='text-white font-bold'>{'Invite Friends'}</span>
              <div className='text-[#bdc3c7] text-sm mt-1'>{'Invite your friends to XChat!'}</div>
            </div>
            {/* <span className={`text-[#000000] font-bold bg-[${'#adff2f'}] cursor-pointer rounded-[22px] py-[7px] px-[15px]`}
                  //onClick={handleClick}
                  > */}
                    <CreateInviteCodeDialog trigger={<CreateInviteBtn />} invite_code='1122'/>
            {/* </span> */}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-gray-800 h-[93px]'>
        {(
          <PixelButton  onClick={onOpenInvitationCodeInput} {...{backgroundColor: '#adff2f',
            textColor: '#000000',
            children: 'Get an Invitation Code?',
            width: 331,
            height: 61,
            }}/>
        )}
      </div>
      <InvitationCodeInput
        isOpen={isInvitationCodeInputOpen}
        onSubmit={handleInvitationCodeInputSubmit}
        onCancel={handleInvitationCodeInputCancel}
      />
    </div>
    )
}

export default Task
