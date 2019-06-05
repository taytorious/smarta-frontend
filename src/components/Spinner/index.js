import React, {Fragment} from 'react';
import styled from 'styled-components';
import BG from '../SplashBG'
import Roller from './Roller';



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