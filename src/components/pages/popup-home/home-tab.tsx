import { Tabs, TabsContent, TabsList, TabsTrigger } from '~/components/ui/tabs'
import UserAssets from './user-assets'

const HomeTab = () => {
  return (
    <Tabs defaultValue='token' className='mt-2'>
      <TabsList className='grid w-full grid-cols-2  rounded-none px-2'>
        <TabsTrigger value='token'>Tokens</TabsTrigger>
        <TabsTrigger value='setting'>Setting</TabsTrigger>
      </TabsList>
      <TabsContent value='token'>
        <UserAssets />
      </TabsContent>
      <TabsContent value='setting'></TabsContent>
    </Tabs>
  )
}

export default HomeTab
