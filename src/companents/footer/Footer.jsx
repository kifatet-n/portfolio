import React from 'react'

function Footer() {
  return (
    <footer className='footer  bg-slate-900 flex justify-between px-[100px] py-[60px]'>
        <div className='footer-left py-3'>
        <h1 className='footer-title text-5xl text-white'>Concat</h1>
        <p className='text-white text-2xl'>Feel free to reach out!</p>
        </div>
        <div className='footer-right columns-1'>
            <div className='flex gap-2'>
            <img src="./src/assets/contact/emailIcon.png" />
            <p className='text-xl text-white py-3'>myemail@email.com</p>
            </div>
            <div className='flex gap-2'>
            <img src="./src/assets/contact/linkedinIcon.png"/>
            <p className='text-xl text-white py-3'>linkedin.com/myname </p>
            </div>
            <div className='flex gap-2'>
            <img src="./src/assets/contact/githubIcon.png" />
            <p className='text-xl text-white py-3'>github.com/myname </p>
            </div>

        </div>
        
        
    </footer>
  )
}

export default Footer