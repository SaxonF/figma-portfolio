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
  // return { project: {name: "National Geographic", background: "#F1F2F6", screens: [
  //   {
  //     name: "Problem",
  //     comments: ["Any brand can look good. But in today’s crowded market only those that can make – and keep – a real connection with customers will truly thrive. This is what we deliver for the brands that we work with. We were founded on the belief that good design and powerful ideas can create a lasting emotional experience between a brand and its audiences. And we’re here to do just that.", "Any brand can look good. But in today’s crowded market only those that can make – and keep – a real connection with customers will truly thrive. "],
  //     image: "https://works.pm/images/onsite-web-01.jpg"
  //   },
  //   {
  //     name: "Problem",
  //     comments: [],
  //     image: "https://works.pm/images/onsite-web-01.jpg"
  //   },
  //   {
  //     name: "Problem",
  //     comments: ["Zero is the first modern banking experience to combine the simplicity of a debit card with the rewards of a credit card, featuring unlimited 1.0% to 3.0% cash back on spending and 0% to 1.75% annually on average Current Position (daily Zero Checking minus Zerocard balance)* with zero of the most annoying fees of typical bank accounts.",
  //   "Make deposits and your balance in the Zero app goes up, spend on your Zerocard and your balance goes down. Purchases are reflected right away and our unique features help you avoid spending more than your balance or running up monthly bills that you have to worry about manually paying."],
  //     image: "https://works.pm/images/onsite-web-01.jpg"
  //   }
  // ]} }
}

export default Project
