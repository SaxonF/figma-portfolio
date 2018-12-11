import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(10px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const FadeIn = styled.div`
  animation: ${fadeInAnimation} 1s ease-out forwards;
  animation-delay: ${props => props.delay/3 || 0}s;
  opacity: 0;
`

export default FadeIn
