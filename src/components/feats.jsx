import React from 'react'
import { FaRobot } from "react-icons/fa6";
import FeatComp from './FeatComp';
import { IoIosAnalytics } from "react-icons/io";
import { SiFuturelearn } from "react-icons/si";
import { GrIntegration } from "react-icons/gr";

const Feats = () => {
  return (
    <div className='w-full  bg-white py-6  select-none font-oswald mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 '>
            <FeatComp icon={<FaRobot size={50} />}
        title="Intelligent Quizzes"
        description="Utilizing the advanced capabilities of Gemini AI, our platform generates dynamic and personalized quizzes tailored to each student’s knowledge level and learning pace. The AI continuously adapts, ensuring that the questions remain challenging and engaging, fostering an optimal learning environment."
      />
                  <FeatComp icon={<IoIosAnalytics size={50} />}
        title="Instant Analytics"
        description="Gain deep insights into your performance with our real-time analytics dashboard. Powered by Gemini AI, the platform analyzes quiz results to provide detailed feedback, track progress over time, and suggest areas for improvement, making your learning journey more efficient and effective.
                "/>
                                  <FeatComp icon={<SiFuturelearn size={50} />}
        title="Adaptive Learning"
        description="Experience the cutting edge of educational technology with our adaptive learning algorithms. Gemini AI assesses your strengths and weaknesses in real-time, adjusting the difficulty and topics of subsequent quizzes to match your evolving proficiency, ensuring a personalized and progressive learning experience."/>
                                                  <FeatComp icon={<GrIntegration  size={50} />}
        title="Seamless Integration & Accessibility"
        description="Our platform is designed with modern technology in mind, offering seamless integration with various learning management systems (LMS) and other educational tools via flexible APIs. Additionally, the platform is mobile-friendly, allowing you to access quizzes and learning materials anytime, anywhere, ensuring continuous learning without any disruption.
                "/>
                


            
    </div>
  )
}

export default Feats