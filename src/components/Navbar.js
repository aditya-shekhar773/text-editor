import React from 'react'
import {Link} from "react-router-dom"


const Navbar = (props) => {
   const Logo = () => <h1 className='text-2xl font-semibold text-white cursor-pointer'>TextTitle</h1> 

   const LinkList = () => (
        <div className="gap-5 text-white flex text-lg mr-96">
            <Link to="" className='text-white p-3 font-semibold'>Home</Link>
            <Link to="/about" className='text-white p-3 font-semibold'>About</Link>
            <Link to="/content" className='text-white p-3 font-semibold'>Contact</Link>
        </div>
    )  

   const Search = () => (
        <div className='flex gap-2'>
            <input type='text' className='border px-2 py-1 rounded-lg' placeholder='Search'/>
            <button className='rounded-lg bg-green-800 px-2 py-1'>Click</button>
        </div>
   )

   const Switch = (props) =>(
        <label className="inline-flex relative items-center cursor-pointer">
            <input  onClick={props.toggleMode} type="checkbox" value="" className="sr-only peer"/>
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>

   )
   
  return (
    <div className='bg-slate-400 px-4 py-3 flex justify-between items-center'>
        <Logo/>
        <LinkList/>
        <Search/>
        <Switch/>
    </div>
  )
}

export default Navbar
