import React from 'react'

function Button({children, style, onClick, className, disabled}) {
  return (
    <button style={style} className={`${className} button`} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button