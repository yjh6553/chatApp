import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full p-10 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-700'>Login&nbsp; 
          <span className='text-blue-500'>Chat App</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Passwrod</span>
            </label>
            <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-5 inline-block ml-3'>
              Don't have an account?
            </a>
          </div>
          <div>
            <button className='btn btn-block btn-sm mt-5'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login

//save for later use for other pages
{/* <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full w-full p-10 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-700'>Login&nbsp; 
          <span className='text-blue-500'>Chat App</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Passwrod</span>
            </label>
            <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
          </div>
          <div>
            <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-5 inline-block ml-3'>
              Don't have an account?
            </a>
            <div>
              <button className='btn btn-block btn-sm mt-5'>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div> */}