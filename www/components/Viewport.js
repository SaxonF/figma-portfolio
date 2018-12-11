import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import { Box } from 'rebass'

export const Viewport = styled(Box)`
  min-height: 100vh;
  transition: background 200ms;
  ${color}
`

export default Viewport
