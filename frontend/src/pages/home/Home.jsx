import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message/MessageContainer'


const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] p-10 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100'>
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home