import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import MoreIcon from 'data-base64:@/assets/more.png'
import EthIcon from 'data-base64:@/assets/eth.png'
import ProfileIcon from 'data-base64:@/assets/profile.png'
import AdamIcon from 'data-base64:@/assets/tx2.png'
import EmmaIcon from 'data-base64:@/assets/tx4.png'
import KathyIcon from 'data-base64:@/assets/tx3.png'
import StateDualButton from './StateDualButton'
import DiscountCodeDialog from '../components/DiscountCodeDialog'
import InvitationCodeDisplay from '../components/InvitationCodeDisplay'
import InvitationCodeInput from '../components/InvitationCodeInput'
import DeleteFriendConfirmation from '../components/DeleteFriendConfirmation'
import BuyKeysDialoge from '../components/BuyKeysDialoge'
import SellKeysDialoge from '../components/SellKeysDialoge'
import { Alert, AlertDescription, AlertTitle } from '~/components/ui/alert'
import { InfoCircledIcon, CheckCircledIcon } from '@radix-ui/react-icons'
import { WindowPostMessage } from '~/lib/wpm'
import type { User } from '../../tab/AuthContext'
import type { Props } from 'ahooks/lib/useControllableValue'

const ProfileHeader: React.FC<Props> = ({ account3 }) => (
  <div className='flex items-center mb-[14px]'>
    <div className='bg-green-400 rounded-lg overflow-hidden flex items-center justify-center'>
      <img src={account3?.userInfo?.avatarUrl ? account3?.userInfo?.avatarUrl : ProfileIcon} width={151} height={167} alt='Profile' />
    </div>
    <div className='flex-grow ml-[35px]'>
      <h2 className='text-xl font-bold'>{account3?.userInfo?.nickname ? account3?.userInfo?.nickname : 'XChat User'}</h2>
      <p className='text-gray-400 mt-[4px]'>{account3?.userInfo?.twitterUsername ? account3?.userInfo?.twitterUsername : ''}</p>
      <button className='mt-[28px] w-[134px] h-[29px] bg-[#BCF804] text-black rounded-[9px] text-sm text-center leading-[29px]'>
        Edit Profile
      </button>
    </div>
  </div>
)

const FollowingSection: React.FC = () => {
  const following = [
    { name: 'Adam Yaghi', avatar: AdamIcon },
    { name: 'Emma Yaoo', avatar: EmmaIcon },
    { name: 'Kathy Rodrigo', avatar: KathyIcon },
    { name: 'John Doe', avatar: '' },
    { name: 'Jane Smith', avatar: '' },
  ]

  return (
    <>
      <h3 className='mb-[7px] text-[24px] font-bold'>Following</h3>
      <div className='flex mb-4 cursor-pointer'>
        {following.slice(0, 3).map((user, index) => (
          <div
            key={index}
            className='w-[78px] h-[78px] bg-gray-600 rounded-full mr-[45px] overflow-hidden'
          >
            <Image
              src={user.avatar}
              width={78}
              height={78}
              alt={user.name}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
        {following.length > 3 && (
          <div className='w-[78px] h-[78px] rounded-full cursor-pointer flex items-center justify-center'>
            <Image
              src={MoreIcon}
              width={78}
              height={78}
              alt='More'
              className='w-full h-full object-cover'
            />
          </div>
        )}
      </div>
    </>
  )
}

const InfoBox: React.FC<{ value: string }> = ({ value }) => (
  <div className='bg-[#253341] mb-[28px] w-[456px] h-[57px] rounded-[10px] text-[color: rgba(255,255,255,0.8);] text-[22px] text-center leading-[57px]'>
    <p>{`${value} Key followers`}</p>
  </div>
)

const CurrentBidSection: React.FC<{ state: number }> = ({ state }) =>
  state !== 3 ? (
    <div className='mb-[6px] px-[24px]'>
      <div className='flex items-center mb-[7px] text-[#AAB8C2] text-lg'>
        Current Bid
      </div>
      <div className='flex items-center mb-2'>
        <Image src={EthIcon} width={18} height={29} alt='ETH' />
        <span className='ml-[8px] text-lg text-[#F5F8FA] font-bold'>
          0,039 ETH
        </span>
      </div>
    </div>
  ) : null

const ProfileCard: React.FC<Props> = ({ account3 }) => {
  return (
    <div className='bg-black text-white rounded-lg max-w-md'>
      <ProfileHeader account3={account3} />
      <p className='mb-[21px] text-sm text-white'>
        Anna is a highly skilled cryptocurrency investor known for her
        exceptional returns. With a sharp understanding of market trends and a
        unique perspective on various domains, including blockchain, DeFi, and
        NFTs.
      </p>
      <InfoBox value='223' />
      <FollowingSection />
    </div>
  )
}

const Settings: React.FC = () => {
  const [state, setState] = useState<1 | 2 | 3>(1)
  const [isDiscountDialogOpen, setIsDiscountDialogOpen] = useState(false)
  const [isInvitationCodeOpen, setIsInvitationCodeOpen] = useState(false)
  const [isInvitationCodeInputOpen, setIsInvitationCodeInputOpen] =
    useState(false)
  const [isDeleteFriendConfirmationOpen, setIsDeleteFriendConfirmationOpen] =
    useState(false)
  const [isBuyKeysOpen, setIsBuyKeysOpen] =
    useState(false)
  const [isSellKeysOpen, setIsSellKeysOpen] =
    useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [account3, setAccount3] = useState<User>(null);
  const [showSet, setShowSet] = useState(false);


  useEffect(() => {
    //从客户端获取“账户信息account”
    chrome.storage.local.get(["account", "accountStoredTime"], (result) => {
      if (result.account && result.accountStoredTime) {
        setAccount3(() => result.account);
      } else {
        //alert('请关闭页面，然后重新登录');
      }
      setTimeout(() => setShowSet(true), 500);
    })
  }, [])

  const onOpenDiscountDialog = () => {
    setIsDiscountDialogOpen(true)
  }

  const handleDiscountSubmit = (code: string) => {
    console.log('Discount code submitted:', code)
    setIsDiscountDialogOpen(false)
  }

  const handleDiscountCancel = () => {
    setIsDiscountDialogOpen(false)
  }

  const onOpenInvitationCode = () => {
    setIsInvitationCodeOpen(true)
  }

  const handleInvitationCodeClose = () => {
    setIsInvitationCodeOpen(false)
  }

  const onOpenInvitationCodeInput = () => {
    setIsInvitationCodeInputOpen(true)
  }

  const handleInvitationCodeInputSubmit = (code: string) => {
    console.log('Invitation code submitted:', code)
    setIsInvitationCodeInputOpen(false)
  }

  const handleInvitationCodeInputCancel = () => {
    setIsInvitationCodeInputOpen(false)
  }

  const onOpenDeleteFriendConfirmation = () => {
    setIsDeleteFriendConfirmationOpen(true)
  }

  const handleDeleteFriendConfirm = () => {
    console.log('Friend deleted')
    setIsDeleteFriendConfirmationOpen(false)
  }

  const handleDeleteFriendCancel = () => {
    setIsDeleteFriendConfirmationOpen(false)
  }



  const onOpenBuyKeysDialoge = () => {
    console.log('setIsBuyKeysOpen(true)')
    setIsBuyKeysOpen(true);
  }

  const request_js = new WindowPostMessage({
    name: 'x-wallet-sidepanel',
    target: 'x-wallet-inpage',
  })
  const getStorageData = (key: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      chrome.storage.local.get(key, (result) => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve(String(result[key]) || "");
        }
      });
    });
  };
  const handleBuyKeysSubmit = async (buy_token_number: string) => {
    console.log('handleBuyKeysSubmit');
    if (!/^\d*\.?\d+$/.test(buy_token_number) || parseFloat(buy_token_number) <= 0) {
      alert("请输入大于 0 的数字！");
      return;
    }
    // let token_address = "0x3F157c380B885B9b45962DF2390Df05d302D7df3";
    // let tokenSymbol = "ME30";
    let token_address = "";
    let tokenSymbol = "";
    token_address = await getStorageData("add");
    tokenSymbol = await getStorageData("tokenSymbol");
    debugger;
    const wallet = 'OKX Wallet';
    const nonce = 1;
    //setIsDeleteFriendConfirmationOpen(false) 
    try {
      //wallet = 'MetaMask';
      //##############################################这里要从“zustand全局状态管理”中获取到“登录用户曾经发布的币的代号”
      console.log("tokenSymbol=" + tokenSymbol);
      console.log("token_address=" + token_address);
      if (!token_address || !tokenSymbol) {
        alert("click buy-button once again!");
        return;
      }
      const result = await request_js.send({
        method: 'approveAndBuy',
        data: {
          wallet,
          nonce,
          type: 'wallet',
          tokenSymbol,
          buy_token_number,
          token_address
        },
      });
      //console.log(result.data.address, '--before setaccount, 2025---let us see address=', result.signature);
      //console.log('--before setaccount22, 2025---message=', result.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message || '操作失败')
      } else if (
        typeof error === 'object' &&
        error !== null &&
        'msg' in error
      ) {
        setErrorMsg((error as { msg: string }).msg || '操作失败')
      } else {
        setErrorMsg('操作失败')
      }
      setTimeout(() => {
        setErrorMsg('')
      }, 5000)
    }
  }


  const handleBuyKeysCancel = () => {
    console.log('handleBuyKeysCancel');
    setIsBuyKeysOpen(false);
  }



  const onOpenSellKeysDialoge = () => {
    console.log('setIsBuyKeysOpen(true)');
    setIsSellKeysOpen(true);
  }

  const handleSellKeysSubmit = async (sell_token_number: string) => {
    console.log('handleSellKeysSubmit');
    if (!/^\d*\.?\d+$/.test(sell_token_number) || parseFloat(sell_token_number) <= 0) {
      alert("请输入大于 0 的数字！");
      return;
    }
    // let token_address = "0x3F157c380B885B9b45962DF2390Df05d302D7df3";
    // let tokenSymbol = "ME30";
    let token_address = "";
    let tokenSymbol = "";
    token_address = await getStorageData("add");
    tokenSymbol = await getStorageData("tokenSymbol");
    debugger;
    const wallet = 'OKX Wallet';
    const nonce = 1;
    //setIsDeleteFriendConfirmationOpen(false) 
    try {
      //wallet = 'MetaMask';
      //##############################################这里要从“zustand全局状态管理”中获取到“登录用户曾经发布的币的代号”
      //const tokenSymbol = "ME30";
      //const token_address = "0x3F157c380B885B9b45962DF2390Df05d302D7df3";
      console.log('tokenSymbol=' + tokenSymbol);
      console.log('token_address=' + token_address);
      if (!token_address || !tokenSymbol) {
        alert("click sell-button once again!");
        return;
      }
      const result = await request_js.send({
        method: 'approveAndSell',
        data: {
          wallet,
          nonce,
          type: 'wallet',
          tokenSymbol,
          sell_token_number,
          token_address,
        },
      });
      //console.log(result.data.address, '--before setaccount, 2025---let us see address=', result.signature);
      //console.log('--before setaccount22, 2025---message=', result.message);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message || '操作失败')
      } else if (
        typeof error === 'object' &&
        error !== null &&
        'msg' in error
      ) {
        setErrorMsg((error as { msg: string }).msg || '操作失败')
      } else {
        setErrorMsg('操作失败')
      }
      setTimeout(() => {
        setErrorMsg('')
      }, 5000)
    }
  }

  const handleSellKeysCancel = () => {
    console.log('handleBuyKeysCancel');
    setIsSellKeysOpen(false);
  }

  return showSet && (
    <div className='flex flex-col h-[100%]'>
      <div className='flex-grow px-[24px]'>
        <ProfileCard account3={account3} />
      </div>
      <CurrentBidSection state={state} />
      <StateDualButton
        state={state}
        setState={setState}
        onOpenDiscountDialog={onOpenDiscountDialog}
        onOpenInvitationCodeInput={onOpenInvitationCodeInput}
        onOpenDeleteFriendConfirmation={onOpenDeleteFriendConfirmation}

        onOpenBuyKeysDialoge={onOpenBuyKeysDialoge}
        onOpenSellKeysDialoge={onOpenSellKeysDialoge}
      />
      <DiscountCodeDialog
        isOpen={isDiscountDialogOpen}
        onSubmit={handleDiscountSubmit}
        onCancel={handleDiscountCancel}
      />
      <InvitationCodeDisplay
        code='ABCD1234567890'
        isOpen={isInvitationCodeOpen}
        onClose={handleInvitationCodeClose}
      />
      <InvitationCodeInput
        isOpen={isInvitationCodeInputOpen}
        onSubmit={handleInvitationCodeInputSubmit}
        onCancel={handleInvitationCodeInputCancel}
      />
      <DeleteFriendConfirmation
        isOpen={isDeleteFriendConfirmationOpen}
        onConfirm={handleDeleteFriendConfirm}
        onCancel={handleDeleteFriendCancel}
      />

      <BuyKeysDialoge
        isOpen={isBuyKeysOpen}
        onSubmit={handleBuyKeysSubmit}
        onCancel={handleBuyKeysCancel}
      />
      <SellKeysDialoge
        isOpen={isSellKeysOpen}
        onSubmit={handleSellKeysSubmit}
        onCancel={handleSellKeysCancel}
      />

      {errorMsg && (
        <Alert variant='destructive' className='mt-auto mx-auto mb-2 w-[90%]'>
          <InfoCircledIcon className='h-4 w-4' />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMsg}</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default Settings
