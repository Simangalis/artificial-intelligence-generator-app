
import React from 'react'
import Link from 'next/link';
const Footer = () => {

  return (
    <div className="p-2 shadow-sm border-t-2 bg-primary flex flex-col md:flex-row justify-between items-center ">
    <div className="flex gap-2 items-center p-2 ">
        <p className='text-white'>Copyright © 2024 Mncwango</p>
    </div>

    <div className="flex flex-col md:flex-row gap-1 items-center mt-4 md:mt-0">
      <div className="bg-primary p-1 rounded-full">
      <p className='text-white font-bold text-center md:text-left'>Need any web application services? </p>
        <Link href='http://simangalisomncwango.com/'>
        <button className="text-white transition transform duration-300 ease-in-out mt-2 md:mt-0">👉 Simangaliso Mncwango.com</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Footer
