import React, { Component, useState, useEffect } from 'react'
import Link from "next/link"
import 'isomorphic-fetch'
import { Flex, Box, Heading, Button, Text } from 'rebass'
import styled from 'styled-components'

import { Title, Paragraph, Container, Screen, FadeIn } from '../components'
import cachedFetch, { overrideCache } from '../lib/cached-json-fetch'

const Project = (props) => {
  const { project, isServerRendered, baseUrl, onLoading } = props

  useEffect(() => {
    // When the page is server-rendered,
    // we override the value in the client cache
    if (isServerRendered) {
      overrideCache(baseUrl, project);
    }
  });

  return (
    <>
    { project &&
      <Box>
        <Container pt={5}>
          <FadeIn>
            <Title fontSize={[4,5,6]}>{project.name}</Title>
          </FadeIn>
        </Container>
        { project.screens.map((screen, index) => (
          <FadeIn delay={index+1}>
            <Screen bg={project.background} screen={screen} key={index} index={index} />
          </FadeIn>
        )) }
      </Box>
    }
    </>
  )
}

Project.getInitialProps = async ({ req, query: { id } }) => {
  const isServerRendered = !!req
  const url = isServerRendered ? req.headers.host : window.location.hostname
  const baseUrl = `https://${url}/api/portfolio/projects/${id}`
  const project = await cachedFetch(baseUrl)
  return { project, isServerRendered, baseUrl }
}

export default Project
