import React from 'react'
import { Position } from './index'
import styled from 'styled-components'

export function Background(props) {
  const { background, activeProject } = props

  const focusWidth = activeProject ? 1/3 : 1

  return (
    <Position bg={background} left={0} top={0} bottom={0} right={0} position="fixed" zIndex={0} />
  )
}

export default Background

const FocusBackground = styled(Position)`
  transition: width 1.5s cubic-bezier(0.86, 0, 0.07, 1);
`
