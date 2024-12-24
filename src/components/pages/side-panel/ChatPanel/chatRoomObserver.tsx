import { v4 as uuidv4 } from 'uuid'

export interface RoomT {
  dialogId?: string
  parent?: string
  id: number | string
  title?: string | React.ReactNode
  type?: string
  index?: number
  dismiss?: boolean
}

let counter = 0

class Observer {
  subscribers: Array<(room: RoomT) => void>
  room: Array<RoomT>
  constructor() {
    this.subscribers = []
    this.room = []
  }

  subscribe = (subscriber: (room: RoomT) => void) => {
    this.subscribers.push(subscriber)

    // DOM销毁时移除这个订阅者
    return () => {
      const index = this.subscribers.indexOf(subscriber)
      this.subscribers.splice(index, 1)
    }
  }

  publish = (data: RoomT) => {
    this.subscribers.forEach((subscriber) => subscriber(data))
  }

  openRoom = (data: RoomT) => {
    if (!data.dialogId) {
      data.dialogId = uuidv4()
    }
    data.index = counter++
    this.publish(data)
    this.room = [...this.room, data]
  }

  closeRoom = (data: RoomT) => {
    if (data.dialogId) {
      console.log('close', data)

      this.room = this.room.filter((room) => room.dialogId !== data.dialogId)
      console.log('current room', this.room);

      this.subscribers.forEach((subscriber) =>
        subscriber({ ...data, dismiss: true }),
      )
    }
  }
}

export const RoomObserver = new Observer()

export const openChat = (data: RoomT) => {
  RoomObserver.openRoom(data)
}
