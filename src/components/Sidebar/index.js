import React from 'react'
import Logo from '../Icons/Logo'
import Circle from '../Icons/Circle'

function Sidebar() {
  return (
    <aside className="h-screen sticky top-0 bg-gray-800">
      <div className="mx-auto p-5 cursor-pointer">
        <Logo className="mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
      <div className="text-gray-500 hover:text-gray-100 cursor-pointer p-5">
        <Circle className="fill-current mx-auto" />
      </div>
    </aside>
  )
}

export default Sidebar
