import React, { useState, Fragment } from 'react';
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import {brand_red} from "../../utils/colors";
import Stations from '../../constants/stations';
import ArrivalList from "../../containers/ArrivalsList";

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
    let {station} = match.params;
    const stationKey = station.replace(/Station/gi, '').trim().replace('-', "");
    const directions = Stations[stationKey].directions;

    const [shouldShowPicker, setShouldShowPicker] = useState(true)

    return (
        <Fragment>
            {shouldShowPicker && <DirectionContainer>
                {Object.keys(directions).map((direction, index) => (
                    <Direction key={direction} to={`${match.url}/${direction}`}>
                        {direction}
                    </Direction>
                ))}
            </DirectionContainer>}
            <Route
                path={`${match.url}/:direction`}
                render={(props) => { setShouldShowPicker(false); return <ArrivalList  {...props} station={stationKey} />}} />
        </Fragment>
    );
};



export default DirectionSelector;

