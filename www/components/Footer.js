import React from 'react'
import { Box } from 'rebass'
import styled from 'styled-components'
import { Link, Container, Position } from './index'

export function Footer(props) {
  const { projects } = props;

  return (
    <Box py={6}>
      <Container>
        <Position position="relative" zIndex={20}>
          <Link prefetch href="/">
            © 2018 Mr Miyagi.
          </Link>
          <Link prefetch href="/">
             Dribbble.
          </Link>
          <Link prefetch href="/">
             Twitter.
          </Link>
          <Link prefetch href="/">
             Email.
          </Link>
        </Position>
      </Container>
    </Box>
  )
}

export default Footer
