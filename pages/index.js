import React from 'react'
import Homepage from './components/main/homepage'
import MainNav from './components/navbar/MainNav'

const Home = () => {
  return (
    <div>
      <MainNav />
      <div id='root' className='page-container'>
      <Homepage />
      </div>
    </div>
  )
}

export default Home