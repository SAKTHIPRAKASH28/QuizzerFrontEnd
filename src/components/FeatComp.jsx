import React from 'react'

const FeatComp = ({description,title,icon}) => {
  return (
    
    <div className=' bg-gray-60  m-10 ml-20 mr-20'>
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#e741e7] to-[#5b0ea3]"></span>
    {icon && <div className="text-[#e741e7] mb-4">{icon}</div>}

    <h1 className=' text-5xl mb-5 font-Tiny5 uppercase font-bold bg-gradient-to-r from-[#e741e7] to-[#5b0ea3] text-transparent bg-clip-text w-full'>
    {title}
    
    </h1>
    
    <p className='  text-xl '>
    {description}</p>

</div>
  )
}

export default FeatComp