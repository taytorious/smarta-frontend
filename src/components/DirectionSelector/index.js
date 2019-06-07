import React, { useState, Fragment } from 'react';
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import {brand_lighter_grey, brand_red} from "../../utils/colors";
import Stations from '../../constants/stations';

const DirectionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 7vh;
  height: calc(100vh - 70px);
  
  > div:first-of-type {
    border-top: none;
  }
`;

const Direction = styled(Link)`
  width: 100%;
  flex: 1 1;
  border-top: 1px solid ${brand_red};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DirectionSelector = (props) => {
    const {
        match
    } = props;
    const {station} = match.params;
    const key = station.replace(/Station/gi, '').trim().replace('-', "");
    console.log(key);
    const directions = Stations[key].directions;
    return (
        <Fragment>
            <DirectionContainer>
                {Object.keys(directions).map((key, index) => (
                    <Direction key={key} to={{pathname:`${match.url}/${key}`, state: {station: station, direction: key}}}>
                        {key}
                    </Direction>
                ))}
            </DirectionContainer>
        </Fragment>

        );
};



export default DirectionSelector;

