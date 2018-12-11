import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { space, fontFamily, fontSize, color} from 'styled-system'

export const Base = styled.div`
  margin: -8px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #eee;
  ${space}
  ${fontFamily}
  ${fontSize}
  ${color}
`

Base.defaultProps = {
  fontSize: 1,
  fontFamily: 'sans'
}

export default Base
