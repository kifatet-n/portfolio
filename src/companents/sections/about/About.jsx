import React from 'react'

function About() {
  return (
    <div className='bg-black mx-20'>
        <h2 className='text-white px-[120px] py-10'>ABOUT</h2>
        <div className='flex'>
            <img src="./src/assets/about/aboutImage.png" alt="" />
            <div className='py-40'>
                <div className='flex '>
                    <img src="./src/assets/about/cursorIcon.png" alt="" />
                    <p className='text-white'>Frontend Developer <br />
                         I’m a front-end developer with experience <br />
                        in building responsive and optimized sites</p>
                </div>
                <div className='flex'>
                    <img src="./src/assets/about/serverIcon.png" alt="" />
                    <p className='text-white'>Backend Developer <br /> I have experience developing fast and <br />
                    optimised back-end systems and APIs</p>
                </div>
                <div className='flex'>
                    <img src="./src/assets/about/uiIcon.png" alt="" />
                    <p className='text-white'> UI Designer <br /> I have designed multiple landing pages and <br />
                    have created design systems as well </p>
                    
                </div>
            </div>
        </div>


    </div>
  )
}

export default About