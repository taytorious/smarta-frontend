import React, {Fragment, useState, useEffect} from 'react';
import styled from 'styled-components';
import BG from '../SplashBG';
import { IconContext } from 'react-icons';
import { FaRedo } from 'react-icons/fa';
import {brand_darkest_grey, brand_orange, brand_blue} from "../../utils/colors";


const Apology = styled.div`
  font-size: 10vh;
  text-align: center;
  color: ${brand_orange};
  padding: 40px 20px;
`;

const ErrorLabel = styled.div`
  color: ${brand_darkest_grey};
  font-size: 4vh;
  text-align: center;
`;

const ReloadButton = styled.button`
  width: 100%;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Error = ({error}) => {

    return (
        <Fragment>
            <BG/>
            <Apology>Oops, Our Bad</Apology>
            <ErrorLabel>{error && error.message}</ErrorLabel>
            <ReloadButton onClick={(e) => window.location.reload()}>
                <IconContext.Provider value={{ color: brand_blue, size: '7vh'}}>
                    <FaRedo />
                </IconContext.Provider>
            </ReloadButton>
        </Fragment>

    );
};

export default Error;