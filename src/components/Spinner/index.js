import React, {Fragment} from 'react';
import styled from 'styled-components';
import Roller from './Roller';

const BG = styled.div`
  position: absolute;
  background: url('/img/ataper-bg.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.2;
  z-index: 0;
  height: 100vh;
  width: 100vw;
`;

const RollerContainer = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;


const Spinner = () => {
    return (
        <Fragment>
            <BG />
            <RollerContainer>
                <Roller/>
            </RollerContainer>
        </Fragment>
    );
}

export default Spinner;