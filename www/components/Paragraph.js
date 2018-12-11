import React from 'react'
import styled from 'styled-components'
import { Text } from 'rebass'

export const Paragraph = styled(Text)``

Paragraph.defaultProps = {
  as: 'p',
  mb: 3,
  fontSize: [2,3]
}

export default Paragraph
