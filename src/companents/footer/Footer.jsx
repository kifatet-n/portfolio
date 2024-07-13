import React from 'react'

function Footer() {
  return (
    <footer className='footer flex px-[120px] py-[80px]'>
        <div className='footer-left'>
        <h1 className='font-size-20px'>Concat</h1>
        <p>Feel free to reach out!</p>
        </div>
        <div className='footer-right flex justify-between'>
            <div>
            <img src="./src/assets/contact/eamilIcon.png"  />
            <p> myemail@email.com</p>
            </div>
            <div>
            <img src="./src/assets/contact/githubIcon.png"/>
            <p>linkedin.com/myname </p>
            </div>
            <div>
            <img src="./src/assets/contact/linkedinIcon.png" />
            <p>github.com/myname </p>
            </div>

        </div>
        
        
    </footer>
  )
}

export default Footer