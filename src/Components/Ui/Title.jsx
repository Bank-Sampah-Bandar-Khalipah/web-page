import React from 'react'

function Title({children, className = ""}) {
  return (
    <h1 className={`text-2xl md:text-4xl font-bold text-center ${className}`}>
        {children}
    </h1>   
  )
}

export default Title