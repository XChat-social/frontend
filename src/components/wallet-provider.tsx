import React, {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from 'react'
import { useStorage } from '@plasmohq/storage/hook'

// 定义 Context 的类型
interface WalletContextType {
  account: `0x${string}`
  setAccount: Dispatch<SetStateAction<`0x${string}`>>
}

// 创建 Context
const WalletContext = createContext<WalletContextType | undefined>(undefined)

interface WalletProviderProps {
  children: ReactNode
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [account, setAccount] = useStorage('account')
  console.log('WalletProvider', account)

  const value = useMemo(
    () => ({
      account,
      setAccount,
    }),
    [account, setAccount],
  )

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  )
}

// 创建一个自定义 Hook 来使用 Context
export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
