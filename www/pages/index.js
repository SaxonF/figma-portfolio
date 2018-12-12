import React, { Component, useState, useEffect } from 'react'
import Link from "next/link"
import { Box, Heading, Button, Flex, Text } from 'rebass'
import { Projects, Position, Paragraph, FadeIn, Container, Viewport} from '../components'
import 'isomorphic-fetch'
import cachedFetch, { overrideCache } from '../lib/cached-json-fetch'


const Index = (props) => {
  const { projects, onProjectHover, status, baseUrl } = props;

  useEffect(() => {
    // When the page is server-rendered,
    // we override the value in the client cache
    if (props.isServerRendered) {
      overrideCache(baseUrl, projects);
    }
  });

  return (
    <Container>
      <FadeIn>
        <Paragraph mb={5} mt={6}>
          If you're a designer who uses Figma, needs a portfolio, and wants to learn a fun new technology stack then you may find this project interesting.
        </Paragraph>
      </FadeIn>
      <Projects projects={projects} onProjectHover={onProjectHover}/>
    </Container>
  )
}

Index.getInitialProps = async ({req}) => {
  const isServerRendered = !!req
  const url = isServerRendered ? req.headers.host : window.location.hostname
  const baseUrl = `https://${url}/api/portfolio/projects`
  const projects = await cachedFetch(baseUrl)
  return { projects, isServerRendered, baseUrl }
  // return { projects: [{name: "National Geographic", id: "3", background:"#1100DE"}, {name: "Ueno", id: "3", background: "#aaa"}, {name: "Twitter", id: "3", background:  "#FFD300"}] }
}

export default Index
