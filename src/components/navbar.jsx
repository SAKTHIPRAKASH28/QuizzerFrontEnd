import React ,{useState}from 'react'
import { FaGithub ,FaHome} from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
const Navbar = () => {
    const [nav,changeNav]=useState(false)

    const handleNav=()=>{
        changeNav(!nav);
    };
  return (
    <div className='text-white flex items-center justify-between h-24 px-4 max-w-[1240px] mx-auto select-none'>
        <h1 className='font-bold font-Tiny5 bg-gradient-to-r from-[#D8BFD8] to-[#8A2BE2] text-transparent bg-clip-text w-full text-4xl '>QUIZZER</h1>
        <ul className='hidden md:flex font-Tiny5 text-[140%]'>
        
            <li className='p-5  hover:bg-gradient-to-r from-[#D8BFD8] to-[#8A2BE2] hover:text-transparent hover:bg-clip-text'>Home</li>
            <li className='p-5  hover:bg-gradient-to-r from-[#D8BFD8] to-[#8A2BE2] hover:text-transparent hover:bg-clip-text'>Quizzes</li>
            <li className='p-5 mt-1'><a href="https://github.com/SAKTHIPRAKASH28/Quizzer"><FaGithub size={25}/></a></li>
            
        </ul>
        <div className='block md:hidden cursor-pointer'>
            {!nav? <AiOutlineMenu  size={25} onClick={handleNav}/>:<AiOutlineClose size={25} onClick={handleNav}/>}

            </div>
        <div className={nav?'fixed left-0 top-0 w-[60%] h-full border-r px-4 justify-between mx-auto border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%] ease-out duration-1000'}>
        <h1 className='font-bold font-Tiny5 bg-gradient-to-r from-[#D8BFD8] to-[#8A2BE2] text-transparent bg-clip-text w-full text-3xl m-4'>QUIZZER</h1>
        <ul className=' p-3 font-Tiny5 text-xl '>
        
        <li className='p-4 border-b border-gray-600 flex items-center '>Home<FaHome className='ml-2 mb-1 ' /></li>
        <li className='p-4 border-b border-gray-600  flex items-center'>Quizzes<FaBookOpen className='ml-2 mb-1'/></li>
        <li className='p-4 border-b border-gray-600 '><a href="https://github.com/SAKTHIPRAKASH28/Quizzer" className='flex items-center'>GitHub<FaGithub size={20} className='ml-2'/></a></li>
        
    </ul>
        </div>
    </div>
  )
}

export default Navbar