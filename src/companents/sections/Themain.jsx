import React from 'react'
import Profil from './profil/Profil'
import About from './about/About'
import Experience from './experience/Experience'

function Themain() {
  return (
    <main className='bg-slate-900'>
        <Profil/>
        <About/>
        <Experience/>

    </main>
  )
}

export default Themain
