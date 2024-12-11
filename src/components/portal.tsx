import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

export default function Portal(props: {
  children: React.ReactNode
  dom?: HTMLElement | null | (() => HTMLElement | null | undefined)
}) {
  const [target, setTarget] = useState<HTMLElement | undefined | null>(props.dom)

  useEffect(() => {
    const _target = props.dom
    if (!target && typeof _target === 'function') {
      const root = document.getElementById('react-root')
      if (!root) return
      const observer = new MutationObserver(() => {
        const target = _target()
        if (target) {
          observer.disconnect()
          setTarget(target)
        }
      })
      observer.observe(root, { childList: true, subtree: true })
      return () => observer.disconnect()
    }
    if (target) {
      const root = document.getElementById('react-root')
      if (!root) return
      const observer = new MutationObserver(() => {
        if (!target.parentElement) {
          setTarget(null)
          observer.disconnect()
          return
        }
      })
      observer.observe(root, { childList: true, subtree: true })
      return () => observer.disconnect()
    }
  }, [props.dom, target])
  return target ? createPortal(props.children, target) : null
}
