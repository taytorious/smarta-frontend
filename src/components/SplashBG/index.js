import React from 'react';
import styled from 'styled-components';

const BG = styled.div`
  position: absolute;
  background: url('/img/ataper-bg.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.2;
  z-index: -1;
  height: calc(100vh - 70px);
  width: 100vw;
`;

const SplashBG = () => (
    <BG/>
);
export default SplashBG;