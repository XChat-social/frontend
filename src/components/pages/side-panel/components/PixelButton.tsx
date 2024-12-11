import React from 'react'
import Image from 'next/image'
import pixelBorder from 'data-base64:@/assets/pixel-transparent.png'

interface PixelButtonProps {
  children: React.ReactNode
  backgroundColor?: string
  textColor?: string
  onClick?: () => void
  width?: number
  height?: number
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
}

const PixelButton: React.FC<PixelButtonProps> = ({
  children,
  backgroundColor,
  textColor = '#000000',
  onClick,
  width = 167,
  height = 49,
  leftSlot,
  rightSlot,
}) => {
  const useImage = !backgroundColor || backgroundColor === 'transparent'

  const buttonStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    position: 'relative',
    cursor: 'pointer',
    padding: 0,
    border: 'none',
    background: 'none',
  }

  const contentStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Courier New', monospace",
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: textColor,
    zIndex: 1,
  }

  const clipPath = `
    polygon(
      0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px,
      100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px)
    )
  `

  return (
    <button onClick={onClick} style={buttonStyle}>
      {useImage ? (
        <Image
          src={pixelBorder}
          alt='Button border'
          width={width}
          height={height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      ) : (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: backgroundColor,
            clipPath: clipPath,
          }}
        />
      )}
      <div style={contentStyle}>
        {leftSlot && <div style={{ marginRight: '8px' }}>{leftSlot}</div>}
        {children}
        {rightSlot && <div style={{ marginLeft: '8px' }}>{rightSlot}</div>}
      </div>
    </button>
  )
}

export default PixelButton
