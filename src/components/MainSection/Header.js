import React from 'react'

function Header() {
  return (
    <div className="bg-white flex py-6 px-10 font-mono">
      <div className="mr-8">
        <p className="text-gray-500 text-sm">Balance</p>
        <p className="font-semibold text-gray-800">213 920 $</p>
      </div>
      <div>
        <p className="text-gray-500 text-sm">Payout</p>
        <p className="font-semibold text-gray-800">159 465 $</p>
      </div>
    </div>
  )
}

export default Header
