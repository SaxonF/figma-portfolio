import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Title, Link, Position } from './index'

const string_parameterize = (str1) => {
  return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
};

export function ProjectItem(props) {
  const { project, onProjectHover } = props;

  const handleProjectEnter = () => {
    onProjectHover(project.background)
  }

  const handleProjectLeave = () => {
    onProjectHover()
  }

  return (
    <Title fontSize={[4,5,6]} onMouseEnter={handleProjectEnter} onMouseLeave={handleProjectLeave}><Link prefetch withData href={`/project?id=${string_parameterize(project.name)}`} as={`/project/${string_parameterize(project.name)}`}>{project.name}</Link></Title>
  )
}

export default ProjectItem
