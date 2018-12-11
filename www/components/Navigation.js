import React from 'react'
import { Flex } from 'rebass'
import styled, { keyframes, css } from 'styled-components'
import { Title, Position, Link, Logo, Container, LinkInner, FadeIn } from './index'

export function Navigation(props) {
  const { projects, loading } = props;

  return (
    <>
      <Position left={0} top={0} mt={6} right={0} position="fixed" zIndex={50}>
        <Container>
          <FadeIn>
            <LogoWrapper loading={loading}>
              <Link prefetch withData href="/">
                <Logo size={50} fill="white" />
              </Link>
            </LogoWrapper>
          </FadeIn>
        </Container>
      </Position>
      <FigmaLink>
        Powered by Figma
      </FigmaLink>
    </>
  )
}

export default Navigation

const rotate = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  } 50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  } 100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;

const loading = css`
  animation: ${rotate} 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
`

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  transition: tranform 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  ${props => {if (props.loading) { return loading }}}
`

const FigmaLink = styled(LinkInner)`
  position: absolute;
  z-index: 50;
  right: -90px;
  top: 160px;
  transform: rotate(90deg);
  opacity: .3;
  display: flex;
  align-items: center;
  :hover {
    text-decoration: none;
  }
  ::before {
    content: '';
    width: 100px;
    height: 1px;
    margin-right: 30px;
    background: rgba(255,255,255,.3);
  }
  @media only screen and (min-width: 900px) {
    position: fixed;
    left: -90px;
    right: auto;
  }
`
