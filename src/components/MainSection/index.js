import React from 'react'
import Center from './Center'
import Footer from './Footer'
import Header from './Header'

function MainSection() {
  return (
    <div className="flex-1 bg-gray-blue">
      <Header />
      <Center />
      <Footer />
    </div>
  )
}

export default MainSection
