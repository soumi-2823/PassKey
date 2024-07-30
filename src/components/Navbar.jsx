import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 h-14 py-5">

        <div className="logo font-bold text-white text-2xl">
            <span className='text-blue-500'>&lt;</span>
            Pass
            <span className='text-blue-500'>KEY/&gt;</span>
            
            </div>
        {/* <ul>
            <li className='flex gap-4 '>
                <a className='hover:font-bold' href='/'>Home</a>
                <a className='hover:font-bold' href='#'>About</a>
            </li>
        </ul> */}
        <button className='text-white bg-blue-700 my-5 rounded-full flex justify-between items-center ring-white ring-1'>
            <img className='invert py-2 px-2 w-10 ' src="/images/github logo.png" alt="github logo"/>
            <span className='font-bold px-2'>GitHub</span>
        </button>
        </div>
    </nav>
  )
}

export default Navbar
