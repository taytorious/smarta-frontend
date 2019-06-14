import React, { Fragment } from "react";
import styled from 'styled-components';
import Fetcher from "../../components/Fetcher";
import {brand_lighter_grey} from "../../utils/colors";
import { Link } from "react-router-dom";
import api from "../../api";

import LocationIcon from '../../assets/location.svg';

const List = styled.div`
  padding: 0 25px;
`;

const ListItem = styled.div`
  width: 100%;
  border-bottom: 1px solid ${brand_lighter_grey};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  height: calc(12.5vh - 8.75px);
  cursor: pointer;
`;

const ListItemName = styled.div`
    font-size: 4vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DistanceContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    font-size: 2.5vh;
    right: 0;
`;

const DistanceIcon = styled.img`
    height: 5vh;
`;

const StationList = (props) => {

    const {
        fetch
    } = props;
    function renderStationList(data) {
        
        return (
            <List>
                {data.stations.map((station) => {
                    const name = station["station-name"];
                    const key = name.replace(/Station/gi, '').trim().replace(' ', "-");
                    const distance = station.distance.toFixed(2);
                    return (
                        <Link key={key} to={`/${key}`}>
                            <ListItem>
                                <ListItemName>
                                    {name.replace(/Station/gi, '')}
                                </ListItemName>
                                <DistanceContainer>
                                    <DistanceIcon src={LocationIcon} />
                                    {distance} mi
                                </DistanceContainer>
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
        );
    }
    
    return (
        <Fetcher action={fetch || api.fetchStationsByLocation()}>
            
                {data => renderStationList(data)}
            
        </Fetcher>
    );
}

export default StationList;