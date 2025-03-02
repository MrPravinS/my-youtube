import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All","Music","API","Algorithms","Podcatss","Skills","Mixes","English"]
  return (
    <div className='flex'>
      {list.map((item)=>(
        <Button name={item} key={Math.random()}/>
      ))}
    </div>
  )
}

export default ButtonList