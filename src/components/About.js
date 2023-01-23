import React from 'react'

const About = () => {
  return (
    <div name='buisness need' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 sm:flex flex-row'>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-200 text-4xl font-bold inline border-b-4 border-gray-500'>
                    Buisness Need
                </p>
            </div>
            <p className='text-xl mt-10 text-white'>
            77% of ad insights sales management professional surveyed reported
            that they do not use data science (artificial intelligence & machine learning)
            to score leads before they enter sales process.

            </p>
            <br />
            <p className='text-xl text-white'>
            Hence with AI tools there is a huge business opportunity in providing ad sales insight.This involves analyzing consumer behaviour , market trends,
            competitors behaviour which can help companies in increasing the efficiency 
            their sales strategy.So providing tools to help advertising campaign is also a 
            valuable service.
            </p>
        </div>
    </div>
  )
}

export default About