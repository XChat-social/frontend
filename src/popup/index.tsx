import '../styles/globals.css'
import { useState } from 'react'
import { WalletProvider, useWallet } from '~/components/wallet-provider'
import Redirect from './redirect'
import Home from '~/components/pages/popup-home'

const Index = () => {
  const [isX, setIsX] = useState(false)
  const { account } = useWallet()

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs[0].url
      ? setIsX(tabs[0].url.startsWith('https://x.com'))
      : setIsX(false)
  })

  if (isX && account && account !== '0x') return <Home />

  return <Redirect isX={isX} />;
}

const IndexPopup = () => {
  return (
    <WalletProvider>
      <Index />
    </WalletProvider>
  )
}


export default IndexPopup
