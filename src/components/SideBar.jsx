import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)

  if(!isMenuOpen) return null
  return (
    <div className='p-2 shadow-md w-48'>
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sport</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar