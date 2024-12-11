import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '~/components/ui/select'
import PixelButton from '~/components/pages/side-panel/components/PixelButton'
import Image from 'next/image'
import ArbIcon from 'data-base64:@/assets/arb.png'
import DownIcon from 'data-base64:@/assets/down.png'

const CHAINS = [
  { value: '0xa4b1', label: 'Arbitrum', icon: ArbIcon },
  { value: '0xaa36a7', label: 'Sepolia', icon: null },
]

const LeftSlot = ({ icon, alt }: { icon: string | null; alt: string }) =>
  icon ? <Image src={icon} width={20} height={19} alt={alt} /> : null

const RightSlot = () => (
  <Image src={DownIcon} width={11} height={7} alt='Select chain' />
)

const ChainSelect = () => {
  const [selectedChain, setSelectedChain] = useState(CHAINS[0])

  return (
    <Select
      onValueChange={(value) =>
        setSelectedChain(
          CHAINS.find((chain) => chain.value === value) || CHAINS[0],
        )
      }
    >
      <SelectTrigger className='w-[130px] px-0'>
        <PixelButton
          leftSlot={
            <LeftSlot
              icon={selectedChain.icon}
              alt={`${selectedChain.label} icon`}
            />
          }
          rightSlot={<RightSlot />}
          backgroundColor='#adff2f'
          textColor='#000000'
          width={130}
          height={36}
        >
          {selectedChain.label}
        </PixelButton>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Chains</SelectLabel>
          {CHAINS.map((chain) => (
            <SelectItem key={chain.value} value={chain.value}>
              {chain.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default ChainSelect
