import React, { Fragment } from "react";
import styled from 'styled-components';
import Fetcher from "../../components/Fetcher";
import {brand_lighter_grey} from "../../utils/colors";

const ListItem = styled.div`
  width: 100%;
  border-bottom: 1px solid ${brand_lighter_grey};
  font-size: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(12.5vh - 8.75px);
  cursor: pointer;
`;

const StationList = (props) => {

    const {
        fetch
    } = props;
    function renderStationList(data) {
        
        return (
            <Fragment>
                {data.stations.map((station) => {
                    return <ListItem key={station["station-name"]}>{station["station-name"].replace(/Station/gi, '')}</ListItem>
                })}
            </Fragment>
        );
    }
    
    return (
        <Fetcher action={fetch}>
            
                {data => renderStationList(data)}
            
        </Fetcher>
    );
}

export default StationList;