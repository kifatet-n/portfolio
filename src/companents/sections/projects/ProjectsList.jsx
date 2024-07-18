import React from 'react'
import ProjectsListItem from './ProjectsListItem'
const projectData = [
  {project : "Project A"},
  {project : "Project B"},
  {project : "Project C"}
]

function ProjectsList() {
  return (
    <div className='flex px-28 py-10 gap-10'>
    {projectData.map((data,index) => (
       <ProjectsListItem item = {data} key = {index}/>

    ))}
    



    </div>
  )
}

export default ProjectsList