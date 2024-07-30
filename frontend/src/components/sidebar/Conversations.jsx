import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col space-y-2 h-80">
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
        <Conversation/>
       
      </div>
    </div>
  )
}

export default Conversations