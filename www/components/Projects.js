import React from 'react'
import { Title, ProjectItem, FadeIn } from './index'

export function Projects(props) {
  const { projects, onProjectHover } = props;

  return (
    <>
      { projects.map((project, index) => (
        <FadeIn delay={index+1} key={index} >
          <ProjectItem project={project} onProjectHover={onProjectHover}/>
        </FadeIn>
      )) }
    </>
  )
}

export default Projects
