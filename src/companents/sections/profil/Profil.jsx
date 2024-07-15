import React from 'react'

function Profil() {
  return (
    <div className='flex justify-between px-[120px]'>
        <div className='py-60'>
        <h1 className='text-4xl text-white' >Hi, I'm Ada</h1>
        <p className='text-white'> I’m a full-stack developer with 5 years <br />
        of experience using React and NodeJS. <br />
        Reach out if you’d like to learn more!</p>
        <button className='border-2 text-white'>Contact Me</button>
        </div>
        <div>
        <img src="./src/assets/hero/heroImage.png" alt="" className='size-auto' />
        </div>
    </div>
  )
}

export default Profil