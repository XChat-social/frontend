import XCoin from 'react:~/assets/xcoin.svg'
import ETH from 'react:~/assets/eth.svg'
import { getBalance, type GetBalanceReturnType } from '@wagmi/core'
import { config } from '~/lib/config'

import { useEffect, useState } from 'react'
import { useWallet } from '~/components/wallet-provider'

type Asset = {
  name: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

const assetList: Asset[] = [
  {
    name: 'XCoin',
    icon: XCoin,
  },
  {
    icon: ETH,
    name: 'ETH',
  },
]

const UserAssets = () => {
  const { account } = useWallet()
  const [values, setValues] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      for (let item of assetList) {
        if (item.name === 'ETH') {
          const { formatted } = await getBalance(config, {
            address: account,
          })
          setValues((prevValues) => ({
            ...prevValues,
            [item.name]: formatted,
          }))
        } else if (item.name === 'XCoin') {
          setValues((prevValues) => ({
            ...prevValues,
            [item.name]: 1,
          }))
        }
      }
    }
    fetchData()
  }, [])

  return (
    <div className='text-left p-2 h-[332px] overflow-auto'>
      {assetList.map((item, index) => {
        return (
          <div
            className='flex items-center border rounded-lg mb-4 pr-2 border-[#cccccc]'
            key={index}
          >
            <div>{item.icon && <item.icon transform='scale(0.65,0.65)' />}</div>
            <div className='flex flex-1 items-center'>
              <div className='flex flex-col'>
                <span>{item.name}</span>
                <span>{values[item.name as keyof typeof values] || 0}</span>
              </div>
              <div className='ml-auto'>${0}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default UserAssets
