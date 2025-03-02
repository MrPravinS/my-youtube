import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All","Music","API","Algorithms","Podcasts","Skills","Mixes","English","AI","Live","Comedy","Movies","Songs","News"]
  return (
    <div className='flex'>
      {list.map((item)=>(
        <Button name={item} key={Math.random()}/>
      ))}
    </div>
  )
}

export default ButtonList