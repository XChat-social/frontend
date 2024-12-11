import { useRef } from 'react'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Textarea } from '~/components/ui/textarea'

import bg from 'url:@/assets/bg/create-chat.png'

export default function CreateChatRoomDialog({
  trigger,
}: {
  trigger?: React.ReactNode
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  const handleCreate = () => {}
  return (
    <>
      <div ref={wrapper} className='absolute'></div>

      <Dialog>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        {wrapper.current && (
          <DialogPortal container={wrapper.current}>
            <DialogContent
              className='w-[373px] h-[277px] flex flex-col pb-2 border-none'
              style={{ background: `url(${bg}) center / cover no-repeat` }}
            >
              <div className='flex flex-col h-[137px] mt-[38px] bg-white opacity-80'>
                <Textarea
                  className='flex-1 border-none rounded-none text-lg'
                  placeholder='What do you want to discuss'
                />
              </div>

              <DialogFooter className='items-center justify-center sm:justify-center'>
                <DialogClose asChild className='text-white'>
                  <Button
                    className='my-2 w-[151px] h-[44px]'
                    variant={'pixel'}
                    onClick={handleCreate}
                  >
                    <div className='absolute w-full h-full flex items-center justify-center pointer-events-none z-10 font-bold'>
                      Create
                    </div>
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </DialogPortal>
        )}
      </Dialog>
    </>
  )
}
