import React from 'react'
import { Flex, Box, Heading, Button, Text } from 'rebass'

import { Title, Viewport, Position, Paragraph, Full, Container, ProjectImage, Comment, FadeIn } from '../components'

const string_parameterize = (str1) => {
  return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
};

export function Screen(props) {
  const { screen, bg, index } = props
  const isFirst = index === 0
  const paddingTop = isFirst ? 0 : 5

  return (
    <>
      { screen.comments && screen.comments.length > 0 &&
        <Container pb={5} pt={paddingTop}>
        { screen.comments.map((comment, index) => (
          <Comment comment={comment} key={index}>
            {comment}
          </Comment>
        )) }
        </Container>
      }
      <Box bg={bg} py={4}>
        <ProjectImage src={screen.image} alt={screen.name} />
      </Box>
    </>
  )
}

export default Screen
