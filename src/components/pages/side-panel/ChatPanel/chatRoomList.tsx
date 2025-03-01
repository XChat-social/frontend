
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { v4 as uuidv4 } from 'uuid'
import CreateChatRoomDialog from './createChatRoomDialog'
import { openChat } from './chatRoomDialog'
import search from 'url:@/assets/icon/search.png'
import persen_off from 'url:@/assets/icon/persen_off.png'
import group_on from 'url:@/assets/icon/group_on.png'
import persen_on from 'url:@/assets/icon/persen_on.png'
import group_off from 'url:@/assets/icon/group_off.png'
import { Input_complex } from '~/components/ui/input_complex'
import { useRouter } from "next/navigation"
import SettingsPanel2 from '../SettingsPanel/settings_user'
import SettingsPanel from '../SettingsPanel/settings'
import { type User } from '~/components/pages/tab/AuthContext'
import { BusinessExtClient } from '../../unlock-page/business.ext_grpc_web_pb'


export type Room = {
  id: string
  title: string
  creator: string
  level: number
  randomNumber: number
  stakingList: string[]
  members: number
}
export type Person = {
  userId: string
  nickname: string
  twitterUsername: string
  avatarUrl: string
}

const test: Room[] = []
let test_p: Person[] = []

for (let i = 0; i < 10; i++) {
  test.push({
    id: uuidv4(),
    title: 'Chat Room ' + i,
    creator:
      'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
    level: 1,
    randomNumber: 1.1,
    stakingList: [
      'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
      'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
    ],
    members: 111,
  });
  // test_p.push({
  //   id: uuidv4(),
  //   title: 'Person ' + i,
  //   creator:
  //     'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
  //   level: 1,
  //   randomNumber: 1.1,
  //   stakingList: [
  //     'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
  //     'https://lh3.googleusercontent.com/a/ACg8ocIBkofvH5qdk2wqIRWCPYFp3DrWdg9UQjwBcmgzqoePRA=s96-c',
  //   ],
  //   members: 222,
  // })
}

const CreateRoomBtn = forwardRef<HTMLButtonElement, { onClick?: () => void }>(
  ({ onClick }, ref) => {
    return (
      <Button
        ref={ref}
        className='h-[61px] w-[208px]'
        onClick={onClick}
        variant={'pixel'}
      >
        <div className='absolute w-full h-full flex items-center justify-center pointer-events-none z-10 font-bold'>
          Create Chat Room
        </div>
      </Button>
    )
  },
)

CreateRoomBtn.displayName = 'CreateChatRoomButton'

const SearchIcon = () => {
  return <img src={search} alt='search' className='w-6 h-6' />
}
const PersonOffIcon = () => {
  return <img src={persen_off} alt='persen_off' className='w-6 h-6' />;
}
const RoomOnIcon = () => {
  return (<img src={group_on} alt='group_on' className='w-6 h-6' />);
}
const PersonOnIcon = () => {
  return <img src={persen_on} alt='persen_on' className='w-6 h-6' />;
}
const RoomOffIcon = () => {
  return (<img src={group_off} alt='group_off' className='w-6 h-6' />);
}

export const ChatPanel = () => {
  const [account3, setAccount3] = useState<User>(null);
  const inputRef = useRef<HTMLInputElement>(null)
  const [personState, setPersonState] = useState('PersonOffIcon');
  const [roomState, setRoomState] = useState('RoomOnIcon');
  const [showPersons, setShowPersons] = useState(false);
  const [showRooms, setShowRooms] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  //const router = useRouter();
  const handleSearch = (value: string) => {
    //console.log(value);
    if (personState === 'PersonOffIcon') {//表示查询聊天室
      setShowRooms(true);
      setShowPersons(false);
      setRooms(test);
      //settings是“点击了某一个用户所显示的内容”
      setShowSettings(false);
    } else if (personState === 'PersonOnIcon') {//表示查询用户
      setShowRooms(false);
      setShowPersons(true);
      setShowSettings(false);
      //查询用户， 设置test_p
      test_p = [];
      //发送请求到后端，获取数据填充到test_p
      const client = new BusinessExtClient('https://api.xchat.social/business-web', null, null);
      // 创建请求对象
      const request = new proto.pb.SearchTwitterUserReq();
      //从"输入框"中获取条件
      // let inputValue = '';
      // if (inputRef.current) {
      //   inputValue = inputRef.current.value;
      //   console.log('用户输入的值:', inputValue);
      // }
      console.log('用户输入的值:', value);
      request.setTwitterUsername(value);
      //const metadata = {};
      console.log('---------SearchTwitterUserReq-account=', account3);
      const metadata: { [x: string]: string } = {
        'user-id': account3?.userId + '',
        'token': account3?.token + '',
        'device-id': '0',
      };
      console.log('---------SearchTwitterUserReq-metadata=', metadata);
      // 调用服务方法获取"每日签到这个任务的状态"：currentState
      client.searchUser(request, metadata, (err, response) => {
        if (err) {
          console.error('#####SearchTwitterUserReq-Error:', err.message);
          alert(err.message);
          return;
        } else {
          console.log('#####SearchTwitterUserReq-Response:', response.toObject());
          const res = response.toObject(); // 将 gRPC 响应转为普通对象
          console.log('完整响应:', res);
          // 1. 控制台打印所有用户数据
          // if (res.usersList) {
          //   res.usersList.forEach((user, index) => {
          //     console.log(`用户 ${index + 1}:`, user);
          //   });
          // }
          // 2. 存储到 state 用于界面渲染
          setPersons(res.usersList || []);
          //setShowPersons(true);
          persons.forEach((user, index) => {
            console.log(`person${index + 1}:`, user.twitterUsername, user.avatarUrl, user.userId);
          });
        }
      });
      // test_p.push({
      //   id: uuidv4(),
      //   nickname: 'nickname',
      //   twitter_username: 'twitter_username',
      //   avatar_url: 'avatar_url',
      // })
      // setPersons(test_p);
    }
  }
  const click_person = (value: React.ReactNode) => {
    //console.log(value);
    // 检查 value 是否是 React 元素
    if (React.isValidElement(value)) {
      if (typeof value?.type === "function") {
        //console.log("函数组件:", value.type?.name);
        if (value.type?.name === 'PersonOffIcon') {
          setPersonState('PersonOnIcon');
          setRoomState('RoomOffIcon');
        } else if (value.type?.name === 'PersonOnIcon') {
          setPersonState('PersonOffIcon');
          setRoomState('RoomOnIcon');
        }
      }
    }
  }
  const click_room = (value: React.ReactNode) => {
    //console.log(value);
    if (React.isValidElement(value)) {
      if (typeof value?.type === "function") {
        //console.log("函数组件:", value.type?.name);
        if (value.type?.name === 'RoomOnIcon') {
          setPersonState('PersonOnIcon');
          setRoomState('RoomOffIcon');
        } else if (value.type?.name === 'RoomOffIcon') {
          setPersonState('PersonOffIcon');
          setRoomState('RoomOnIcon');
        }
      }
    }
  }
  const [rooms, setRooms] = useState<Room[]>([]);
  const [persons, setPersons] = useState<Person[]>([]);
  const [kolPerson, setKolPerson] = useState<Person>();

  //const router = useRouter();
  const handleOpenRoom = (room: Room) => {
    openChat({
      id: room.id,
      title: room.title,
    })
    //20250216
    //router.push("../SettingsPanel/settings");
  };
  const handlePerson = (person: Person) => {
    setShowRooms(false);
    setShowPersons(false);
    console.log('-------->pass kolperson:' + person?.twitterUsername);
    // 使用函数式更新确保原子性
    setKolPerson(() => {
      console.log("------立即执行22setKolPerson！！Updated kolPerson:", person);
      return person;
    });
    //alert('selected-user:' + kolPerson?.twitterUsername);
    // 确保状态更新顺序
    setTimeout(() => {
      setShowSettings(true)
    }, 1000);
  }

  useEffect(() => {
    setShowRooms(true);
    setShowPersons(false);
    setShowSettings(true);
    setRooms(test);
    //从客户端获取“账户信息account”
    chrome.storage.local.get(["account", "accountStoredTime"], (result) => {
      if (result.account && result.accountStoredTime) {
        setAccount3(result.account);
      }
    })
  }, [])
  return (
    <div className='px-5 pb-3'>
      <div className='flex items-center justify-between mb-4'>
        <Input_complex
          ref={inputRef}
          placeholder='Input any key words to search...'
          prefix={<SearchIcon />}
          suffix={personState === 'PersonOffIcon' ? <PersonOffIcon /> : <PersonOnIcon />}
          suffix2={roomState === 'RoomOnIcon' ? <RoomOnIcon /> : <RoomOffIcon />}
          aria-placeholder='Input any key words to search...'
          className='h-[56px] pl-14 text-lg'
          iconClick={handleSearch}
          suffixClick={click_person}
          suffix2Click={click_room}
        />
      </div>
      {showRooms && (
        <div id='rooms_div'>
          <div className='flex items-center justify-between mb-[44px]'>
            <CreateChatRoomDialog trigger={<CreateRoomBtn />} />
            <Button className='h-[61px] w-[208px]' variant={'pixel'}>
              <div className='absolute w-full h-full flex items-center justify-center pointer-events-none z-10 font-bold'>
                Hottest Chat Room
              </div>
            </Button>
          </div>
          <div className='grid grid-cols-2 gap-x-4 gap-y-12'>
            {rooms.map((room) => (
              <div
                className='relative flex flex-col text-sm rounded-xl shadow-sm px-4 py-2 pt-7 bg-[rgb(41,51,64)] text-white hover:bg-[rgb(54,69,88)] cursor-pointer'
                key={room.id}
                onClick={() => {
                  handleOpenRoom(room)
                }}
              >
                <div className='absolute l-4 -top-6 rounded-lg border border-[#adff2f] overflow-hidden'>
                  <img
                    src={room.creator}
                    alt='header'
                    className='w-12 h-12 overflow-hidden'
                  />
                </div>

                <div className='flex items-center justify-between'>
                  <h1 className='font-bold text-lg'>{room.title}</h1>
                </div>
                <div className='flex items-center text-xs'>
                  <span>Level:</span>
                  {room.level}
                </div>
                <div className='flex items-center text-xs'>
                  <span>Random Number:</span>
                  {room.randomNumber}
                </div>
                <div className='font-bold my-1 text-sm'>Staking:</div>
                <div className='flex items-center'>
                  <div className='flex items-center -space-x-4'>
                    {Array(4)
                      .fill(0)
                      .map((item, index) => {
                        if (room.stakingList[index]) {
                          return (
                            <img
                              key={index}
                              src={room.stakingList[index]}
                              alt='header'
                              className='w-10 h-10 rounded-full overflow-hidden'
                            />
                          )
                        }
                        return null
                      })}
                  </div>
                  <div className='ml-2'>{room.members || 0} Participants</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showPersons && (
        <div id='persons_div'>
          <div className='grid grid-cols-2 gap-x-4 gap-y-12'>
            {persons.map((person) => (
              <div
                className='flex flex-row  justify-center gap-3 items-center text-sm rounded-xl shadow-sm bg-[rgb(41,51,64)]
                 text-white hover:bg-[rgb(54,69,88)] cursor-pointer'
                key={person?.userId}
                onClick={() => {
                  handlePerson(person)
                }}
              >
                <div className='rounded-lg border border-[#adff2f] overflow-hidden'>
                  <img
                    src={person?.avatarUrl}
                    alt='header2'
                    className='w-12 h-12 overflow-hidden'
                  />
                </div>
                <div className='flex flex-col justify-center gap-1'>
                  <div className=''>
                    <h1 className='font-bold text-lg'>{person.nickname}</h1>
                  </div>
                  <div className='text-xs'>
                    {person.twitterUsername}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {showSettings && (
        <SettingsPanel2 kolPerson={kolPerson} />
        //<SettingsPanel/>
      )}

    </div>
  )
}
