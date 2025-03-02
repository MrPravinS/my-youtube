import React from 'react'

const Button = ({name}) => {
  return (
    <div className='ml-2 mt-3 '>
       <div className=''> <button className='m-1 bg-gray-200 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-300'>{name}</button></div>
       
    </div>
  )
}

export default Button