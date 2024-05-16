import React from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-1'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
        <button type = 'submit' className='btn btn-circle bg-sky-500 text-white'>
            <FaMagnifyingGlass />
        </button>
    </form>
  )
}

export default SearchInput


// starter code
// import React from 'react'
// import { FaMagnifyingGlass } from "react-icons/fa6";

// const SearchInput = () => {
//   return (
//     <form className='flex items-center gap-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
//         <button type = 'submit' className='btn btn-circle bg-sky-500 text-white'>
//             <FaMagnifyingGlass />
//         </button>
//     </form>
//   )
// }

// export default SearchInput