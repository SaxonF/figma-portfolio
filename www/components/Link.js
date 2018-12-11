import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import NextLink from 'data-prefetch-link'
import { space, display, fontFamily, fontSize, color, themeGet } from 'styled-system'

export const LinkInner = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: opacity 500ms;
  :hover {
    opacity: .7;
    text-decoration: underline;
  }
  ${color}
  ${space}
`

export const Link = (props) => (
  <NextLink {...props}>
    <LinkInner>
      {props.children}
    </LinkInner>
  </NextLink>
)

LinkInner.defaultProps = {
  fontFamily: 'sans',
  color: 'link'
}

export default Link
