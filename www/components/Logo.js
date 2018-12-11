import React from 'react';

export const Logo = (props) => (
  <svg width={props.size || 52} height={props.size || 52} viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H101V101H0V0ZM69.8787 29H72V31.1213L31.1213 72H29V69.8787L69.8787 29ZM48.1213 29H43.8787L29 43.8787V48.1213L48.1213 29ZM52.8787 72H57.1213L72 57.1213V52.8787L52.8787 72Z" fill={props.fill || 'black'}/>
  </svg>
)

export default Logo
