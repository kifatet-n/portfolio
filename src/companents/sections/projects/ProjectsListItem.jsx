import React from 'react'

function ProjectsListItem() {
  return (
    <div className='card bg-slate-800 '>
        
            <img src="./src/assets/projects/project.png" alt="" className='py-6 px-6' />
            <div className='grid gap-y-3'>
            <h4 className='px-5 text-white'>Project A</h4>
            <p className='px-5 text-white'>This is a project made to
            learn the latest languages
            by building an app.</p>
            <div className='flex justify-around text-white '>
                <button className='rounded-full px-2 py-1 bg-slate-950'>React</button>
                <button className='rounded-full px-2 py-1     bg-slate-950'>Express</button>
                <button className='rounded-full px-2 py-1 bg-slate-950'>Node</button>
            </div>
            <div className='flex gap-10 py-1 text-white justify-around'>
                <button className='rounded-full bg-slate-400 px-2 py-1'>Demo</button>
                <button className='rounded-full bg-slate-400 px-2 py-1'>Source</button>
            </div>
            </div>

        
        



    </div>
  )
}

export default ProjectsListItem