import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className='w-screen flex justify-center fixed top-5'>
        <ul className=' text-orange-600 flex rounded-2xl font-banksans bg-white'>
            <li className='nav-entry '>Home</li>
            <li className='nav-entry '>Shop</li>
            <li className='nav-entry '>Download</li>
            <li className='nav-entry '>Contact</li>
        </ul>
    </nav>
    </>
  )
}

export default Nav