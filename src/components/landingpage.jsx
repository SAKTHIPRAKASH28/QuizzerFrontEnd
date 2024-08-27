import React from 'react'
import { ReactTyped } from 'react-typed'

const Content = () => {
  return (
    <div className='text-white select-none'>
    <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex text-center flex-col justify-center' >
        <p className='p-2 text-2xl font-bold uppercase font-Tiny5 bg-gradient-to-r from-[#D8BFD8] to-[#8A2BE2] text-transparent bg-clip-text'>Test yourself with AI </p>
        <h1 className='md:text-7xl uppercase sm:text-6xl  text-4xl font-Tiny5 md:py-6 flex justify-center'>Backed by <h1 className='pl-3 bg-gradient-to-r from-[#D8BFD8] to-[#8A2BE2] text-transparent bg-clip-text'>Gemini</h1></h1>
        <div className='flex justify-center font-oswald'>
          <p className='md:text-5xl sm:text-4xl text-xl '>Try a creating a quiz on</p>
          <ReactTyped className='pl-2  text-gray-300 md:text-5xl sm:text-4xl text-xl' strings={[
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Quantum Computing",
    "Genomics",
    "Neuroscience",
    "Cybersecurity"]} backSpeed={25} typeSpeed={50} loop='true'/>
        </div>
        <button className=' hover:text-white mt-10 font-oswald bg-[#8A2BE2] hover:ease-in-out transition-[20] w-[200px] rounded-md mx-auto my-6 px-6 font-medium py-3 text-black'>Create a Quiz</button>
    </div>
    </div>
  )
}

export default Content