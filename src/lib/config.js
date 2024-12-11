
import { http, createConfig } from '@wagmi/core'
import { arbitrum, sepolia } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [arbitrum, sepolia],
  transports: {
    [arbitrum.id]: http(),
    [sepolia.id]: http(),
  },
})