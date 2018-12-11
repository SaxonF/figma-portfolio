import App, {Container} from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from 'rebass'
import Router from 'next/router'

import theme from '../theme'
import { Base, Navigation, Background, Position, Footer, Viewport } from '../components'

const DEFAULT_BACK = "#0E0E0E"

class Portfolio extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, router }
  }

  state = {
    background: DEFAULT_BACK,
    loading: false
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', (url) => this.setState({loading: true, background: DEFAULT_BACK}))
    Router.events.on('routeChangeComplete', () => this.setState({loading: false}))
    Router.events.on('routeChangeError', () => this.setState({loading: false}))
  }

  setBackground = (background = DEFAULT_BACK) => {
    this.setState({background})
  }

  component

  render () {
    const { Component, pageProps, router } = this.props
    const { background, loading } = this.state

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Base>
            <Viewport bg={background}>
              <Navigation loading={loading} />
              <Box pt={300}>
                <Component {...pageProps} onProjectHover={this.setBackground} />
              </Box>
              <Footer />
            </Viewport>

          </Base>
        </ThemeProvider>
      </Container>
    )
  }
}

export default Portfolio
