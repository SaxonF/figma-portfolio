import React from 'react'
import styled from 'styled-components'
import { position, top, bottom, left, right, zIndex } from 'styled-system'
import { Box } from 'rebass'

export const Position = styled(Box)`
  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}
  ${zIndex}
`

export default Position
