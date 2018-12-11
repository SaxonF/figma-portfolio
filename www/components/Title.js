// React-based extension
import React from 'react'
import { Heading } from 'rebass'

export const Title = props =>
  <Heading
    {...props}
    fontWeight='medium'
  />

Title.h1 = props =>
  <Title
    {...props}
    as="h1"
    fontSize={5}
  />

Title.h2 = props =>
  <Title
    {...props}
    as="h2"
    fontSize={4}
  />

Title.h3 = props =>
  <Title
    {...props}
    as="h3"
    fontSize={3}
  />

Title.h4 = props =>
  <Title
    {...props}
    as="h4"
    fontSize={1}
  />

export default Title
