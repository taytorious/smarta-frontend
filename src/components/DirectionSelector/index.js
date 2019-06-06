import React, { useState, Fragment } from 'react';
import { BrowserRouter as Link, Route } from "react-router-dom";
import styled from "styled-components";
import {brand_lighter_grey} from "../../utils/colors";
import Stations from '../../constants/stations';
import ArrivalList from '../../containers/ArrivalsList';

const DirectionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 7vh;
  padding-top: 70px;
  min-height: calc(100vh - 70px);
  
  > div:first-of-type {
    border-top: none;
  }
`;

const Direction = styled.div`
  width: 100%;
  flex: 1 1;
  border-top: 1px solid ${brand_lighter_grey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DirectionSelector = (props) => {
    const {
        location,
        match
    } = props;
    const name = location.state.station;
    const key = name.replace(' ', "");
    const directions = Stations[key].directions;
    return (
        <Fragment>
            <DirectionContainer>
                {Object.keys(directions).map((key, index) => (
                    <Link to={{pathname:`${match.url}/${key}`, state: {station: name, direction: key}}}>
                        <Direction>{key}</Direction>
                    </Link>
                ))}
            </DirectionContainer>
            <Route
                path={`${match.path}/:id`}
                component={ArrivalList}
            />
        </Fragment>

        );
};



export default DirectionSelector;

