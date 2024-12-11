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

import bg from 'url:@/assets/bg/create-invite-code.png'

export default function CreateInviteCodeDialog({
  trigger,
  invite_code
}: {
  trigger: React.ReactNode,
  invite_code: string
}) {
  const wrapper = useRef<HTMLDivElement>(null)
  //拷贝到操作系统的粘贴板
  async function copyTextToClipboard(text: string): Promise<void> {
    if (navigator.clipboard) {
        try {
            await navigator.clipboard.writeText(text);
            console.log('文本已成功复制到粘贴板');
        } catch (err) {
            console.error('复制到粘贴板时出错: ', err);
        }
    } else {
        console.error('当前浏览器不支持navigator.clipboard API');
    }
  }

  const handleCopy = () => {
    copyTextToClipboard(invite_code).then(() => {
        // 可以在这里进行后续操作，比如提示用户已复制成功等
    });
  }
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
              <DialogTitle style={{color:"green",marginTop:"30px"}}>YOUR INVITATION CODE IS:</DialogTitle>
              <div className='flex flex-col h-[137px] mt-[2px] bg-white opacity-80'>
                <Textarea
                  className='flex-1 border-none rounded-none text-lg'
                  value={invite_code}
                  readOnly={true}
                />
              </div>

              <DialogFooter className='items-center justify-center sm:justify-center'>
                <DialogClose asChild className='text-white'>
                  <Button
                    className='my-2 w-[151px] h-[44px]'
                    variant={'pixel'}
                    onClick={handleCopy}
                  >
                    <div className='absolute w-full h-full flex items-center justify-center pointer-events-none z-10 font-bold'>
                      Copy
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
