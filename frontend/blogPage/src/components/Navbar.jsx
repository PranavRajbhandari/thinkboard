import React from 'react'
import {Link} from "react-router"
const Navbar = () => {
  return (
  <header className='bg-base-300 border-b border-case-content/10'>
    <div className='mx-auto max-w-6xl p-4'>
        <div className='flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-primary font-mon tracking-tight'>ThinkBoard</h1>
            <div className='flex items-center gap-4'>
                <Link to={"/create"} className='btn btn-primary '>
                <h1 className='text-2xl text-center'>+</h1>
                <span>New note</span>
                </Link>
            </div>

        </div>

    </div>
  </header>
  )
}

export default Navbar
