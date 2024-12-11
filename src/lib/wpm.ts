import { v4 as uuidv4 } from 'uuid'

export type StreamData = number | string | Record<string, unknown> | unknown[]

export interface PostMessageEvent {
  data?: StreamData
  origin: string
  source: typeof window
}

export class WindowPostMessage {
  private nonce: number
  private requestTree: Map<
    string,
    { resolve: (value: any) => void; reject: (reason: any) => void }
  >
  private name: string
  private target: string
  private origin: string

  constructor({ name, target }: { name: string; target: string }) {
    this.nonce = 0
    this.requestTree = new Map()
    this.name = name
    this.target = target
    this.origin = location.origin
    this.onMessage = this.onMessage.bind(this)
    window.addEventListener('message', this.onMessage as any, false)
  }

  send(data: unknown): Promise<any> {
    const id = uuidv4()
    return new Promise((resolve, reject) => {
      console.log('Sending message', data)
      window.postMessage({
        target: this.target,
        data,
        id,
      })
      this.requestTree.set(id, {
        resolve,
        reject,
      })
      setTimeout(() => {
        if (this.requestTree.has(id)) {
          reject(new Error('Timeout'))
          this.requestTree.delete(id)
        }
      }, 1000 * 60)
    })
  }

  private onMessage(event: PostMessageEvent): void {
    const message = event.data as {
      target: string
      id: string
      origin: string
      data: unknown
    }
    if (message.target !== this.name || event.origin !== this.origin) {
      return
    }
    if (message.id && this.requestTree.has(message.id)) {
      const data = message.data as {
        code: number
        success: boolean
        msg: string
        data: unknown
      }
      const { resolve, reject } = this.requestTree.get(message.id) as any
      this.requestTree.delete(message.id)
      if (!data.success) {
        reject(new Error(data.msg))
      } else {
        resolve(data)
      }
    }
  }
}
