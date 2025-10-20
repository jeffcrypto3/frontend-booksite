import React, { useState } from 'react'

const Button = ({bgColor, loading, mg, text, colorParams, onClick, action = ()=>{}, setMint = ()=>{}, id }) => {

  return (
    <div>
    <button color={colorParams} style={{background: bgColor, margin: mg}}  onClick={onClick} id={id}>{loading ? "Loading..." : text}</button>
    </div>
  )
}

export default Button
