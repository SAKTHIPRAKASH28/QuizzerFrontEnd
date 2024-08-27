import { useState } from "react";
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
const Feedback = () => {
  const [email,setEmail]=useState("");
  const [feedback,setFeedback]=useState("")
  const [submitting, setSubmitting] = useState(false);
  const [submitted,setSubmitted]=useState(false);
  const [error, setError] = useState(null);
  
  const onEmailupdate=(e)=>{
    setEmail(e.target.value)
  }
  const onFeedbackupdate=(e)=>{
    setFeedback(e.target.value)
  }
  const postFeedback=async(e)=>{
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('https://feedback-api-lilac.vercel.app/addFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, feedback }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setEmail('');
      setFeedback('');
      setSubmitted(true);
      setSubmitting(false);

    } catch (error) {
      setError(error.message);
      setSubmitting(false);
    }


  };
  return (
    <div className='w-full bg-[#000300] font-oswald'>
      
<div className="m-20">
{!submitted ? (<>
  <h1 className="text-6xl mb-7 font-bold uppercase bg-gradient-to-r from-[#e741e7] to-[#5b0ea3] text-transparent bg-clip-text w-full ">
    Give Us Your Feedback
  </h1>
  <p className="text-xl text-white ml-1 mb-5  r">
    Your opinion matters to us! Please share your thoughts below. We carefully review every feedback and respond to those that are most impactful.
  </p>
  
  <form className="mt-4">
    <input
      type="email"
      placeholder="Enter your Email..."
      value={email}
      onChange={onEmailupdate}
      className="block w-full px-4 py-3 mt-2 rounded-md bg-gray-300 border-transparent focus:border-[#8A2BE2] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] text-black"
    />
    
    <textarea
      placeholder="Enter your feedback..."
      rows="4"
      value={feedback}
      onChange={onFeedbackupdate}
      className="block w-full px-4 py-3 mt-4 rounded-md text-black bg-gray-300 border-transparent focus:border-[#8A2BE2] focus:outline-none focus:ring-2 focus:ring-[#8A2BE2] "
    ></textarea>
    <button
      type="submit"
      className={`${submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'}" mt-6 bg-[#8A2BE2] text-black transition duration-300 ease-in-out w-full  py-3 rounded-md  font-medium`}
    onClick={postFeedback}
    disabled={submitting}
    >
      Submit Feedback
    </button> 
  </form></>) :(<>
  <div className=" flex justify-center items-center md:mr-[50%]">
    <CiCircleCheck className="text-[#e741e7] " size={120} />
    <h1 className="text-6xl mb-7 font-bold uppercase bg-gradient-to-r from-[#e741e7] to-[#5b0ea3] text-transparent bg-clip-text w-full ">Thanks for your feedback</h1>
    </div>
    </>)}
</div>

      
      </div>
   
  )
}

export default Feedback