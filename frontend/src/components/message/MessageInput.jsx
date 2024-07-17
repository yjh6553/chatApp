import React from 'react'
import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input 
                type="text" 
                className='border text-sm rounded-lg w-full p-3 block bg-slate-500 border-gray-400 placeholder-gray-800 focus:border-gray-500 focus:outline-none text-gray-800'
                placeholder='Type your message...'
            />
            <button type='submit' className='absolute inset-y-0 right-0 flex items-center pr-3'>
                <BsSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput