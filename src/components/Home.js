import React from 'react'
import HeroImage from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div 
        name='home' 
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl  sm:text-6xl ml-30 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-200'>
                  We're the Insights Provider
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                 Our platform collects and analyzes data from multiple sources, providing a comprehensive view of your sales performance and market trends. 
                Our advanced analytics tools help you identify patterns and uncover new opportunities, while our intuitive dashboards and reports make it easy to track progress and make data-driven decisions.


                </p> 
                   <div>
                    <Link to='potential'
                    smooth duration={800}
                     className='group text-white w-fit px-6 py-3 my-2 flex items-center
                     rounded-md bg-gradient-to-r from-cyan-500 to-green-400 cursor-pointer'>
                       
                       Market Potential
                    
                    <span className='group-hover:rotate-90 duration-300'>
                        <FiArrowRight size={20} className='ml-1'/>
                    </span>
                    </Link>
                   </div>
            </div>
            <div className='grid grid-cols-2 grid-rows-2'>
                <img src={HeroImage} alt="my profile"
                className='rounded-tl-2xl mx-auto ml-20 md:w-full' />
                <img src={two} alt="my profile"
                className='rounded-tr-2xl mx-auto ml-20 md:w-full' />
                <img src={three} alt="my profile"
                className='rounded-bl-2xl mx-auto ml-20 md:w-full' />
                <img src={four} alt="my profile"
                className='rounded-br-2xl mx-auto ml-20 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home