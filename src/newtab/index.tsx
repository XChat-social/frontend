import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// import MainTab from '~/components/main-tab'

const queryClient = new QueryClient()

function IndexNewtab() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <MainTab /> */}
      {process.env.PLASMO_TAG === 'dev' && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}

export default IndexNewtab
