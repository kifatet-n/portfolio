import React from 'react'

function Experience() {
  return (
    <div className='py-10'>
        <h2  className='text-white px-[120px] py-10'>EXPERIENCE</h2>
        <div className='flex justify-between px-[120px]'>
            <div className='grid gap-y-10'>
            <div className='flex gap-10'>
            <div>
            <img src="./src/assets/skills/html.png" alt="" className=' py-2 px-2 rounded-full bg-slate-600'/>
            <h3 className='text-white text-center'>HTML</h3>
            </div>
            <div>
            <img src="./src/assets/skills/css.png" alt="" className='py-2 px-2 rounded-full bg-slate-600'/>
            <h3 className='text-white text-center'>CSS</h3>
            </div>
            <div>
            <img src="./src/assets/skills/react.png" alt="" className='py-2 px-2 rounded-full bg-slate-600'/>
            <h3 className='text-white text-center'>React</h3>
            </div>
            </div>
            <div className='flex gap-10'>
            <div>
            <img src="./src/assets/skills/node.png" alt="" className='py-2 px-2 rounded-full bg-slate-600'/>
            <h3 className='text-white text-center'>Node</h3>
            </div>
            <div>
            <img src="./src/assets/skills/graphql.png" alt="" className='py-2 px-2 rounded-full bg-slate-600' />
            <h3 className='text-white text-center'>GraphQL</h3>
            </div>
            <div>
            <img src="./src/assets/skills/mongodb.png" alt="" className='py-2 px-2 rounded-full bg-slate-600' />
            <h3 className='text-white text-center'>MongoDB</h3>
            </div>
            </div>
             <div>
            <img src="./src/assets/skills/figma.png" alt="" className='py-2 px-2 rounded-full bg-slate-600' />
            <h3 className='text-white'>Figma</h3>
            </div>
            </div>
            <div className='grid gap-y-10'>
              <div className='flex bg-slate-600'>
                <img src="./src/assets/history/google.png" alt="" className='size-16'/>
                <div className='px-5'>
                <p className='text-white'>Software Engineer, Google</p>
                <span className='text-white'>sept,2022-Present</span>
                <ul>
                    <li className='text-white'>Worked on Google Maps </li>
                    <li className='text-white'>Reduced load times by 50% </li>
                </ul>
                </div>
              </div>
              <div className='flex bg-slate-600'>
                <img src="./src/assets/history/microsoft.png" alt="" className='size-16' />
                <div className='px-5'>
                    <p className='text-white'>UI Designer, Microsoft</p>
                    <span className='text-white'>Aug 2021- Aug 2022</span>
                    <ul>
                        <li className='text-white'>Worked on Windows 11</li>
                        <li className='text-white'>Designed the control panel</li>
                    </ul>
                </div>
              </div>
              <div className='flex bg-slate-600'>
                <img src="./src/assets/history/netflix.png" alt="" className='size-16' />
                <div className='px-5'>
                    <p className='text-white'>SWE intern, Netflix</p>
                    <span className='text-white'>Apr 2020- jun 2020</span>
                    <ul>
                        <li className='text-white'>Worked on component library</li>
                        <li className='text-white'>Helped create UI components</li>

                    </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Experience