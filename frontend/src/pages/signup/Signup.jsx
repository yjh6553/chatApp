import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      {/* Glassmorphism from https://tailwindcss-glassmorphism.vercel.app/ */}
      <div className="h-full w-full p-10 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
        <h1 className='text-3xl font-semibold text-center text-gray-700 mb-5'>Sign Up&nbsp; 
          <span className='text-blue-500'>Chat App</span>
        </h1>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
        </div>
        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
        </div>
        <div>
          <input type='text' placeholder='Confirm password' className='w-full input input-bordered h-10 mt-3' />
        </div>
        <GenderCheckBox/>
        <div>
          <button className='btn btn-block btn-sm mt-2'>Signup</button>
        </div>
        <div>
          <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block ml-3'>
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Signup



// Starter Code
// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       {/* Glassmorphism from https://tailwindcss-glassmorphism.vercel.app/ */}
//       <div className="h-full w-full p-10 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
//         <h1 className='text-3xl font-semibold text-center text-gray-700 mb-5'>Sign Up&nbsp; 
//           <span className='text-blue-500'>Chat App</span>
//         </h1>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Username</span>
//           </label>
//           <input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
//         </div>
//         <div>
//           <label className='label p-2'>
//             <span className='text-base label-text'>Password</span>
//           </label>
//           <input type='text' placeholder='Enter password' className='w-full input input-bordered h-10' />
//         </div>
//         <div>
//           <input type='text' placeholder='Confirm password' className='w-full input input-bordered h-10 mt-3' />
//         </div>
//         <GenderCheckBox/>
//         <div>
//           <button className='btn btn-block btn-sm mt-2'>Signup</button>
//         </div>
//         <div>
//           <a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block ml-3'>
//             Already have an account?
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }


