import React from 'react'

const Experience = () => {
    
  return (
    <div name='details'
    className='w-full h-full bg-gradient-to-b from-gray-800 to-black' style={{paddingTop: 80}}>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-200 text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Solution Details
                </p>

            </div>
            
            <div>
            <p className='text-xl mt-10 text-white'>
            <b><i>Audience segmentation:</i></b> ML can be used to segment audiences based on demographics, behavior, and other factors.
             This can help ad sales teams target specific groups of users and increase the effectiveness of their ad campaigns.

            </p>
            <br />
            <p className='text-xl text-white'>
           <b><i> Ad optimization:</i></b> ML can be used to optimize ad targeting, placement, and creatives. 
            This can help ad sales teams increase the click-through rate (CTR) and conversion rate of their ads.
            Automated ad placement: ML can be used to automate the placement of ads in a way that maximizes revenue or other goals.

            </p>
            </div>
        </div>
    </div>
  )
}

export default Experience