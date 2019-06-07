import React, { Fragment } from "react";
import styled from 'styled-components';
import Fetcher from "../../components/Fetcher";
import {brand_lighter_grey} from "../../utils/colors";
import api from '../../api';
import ArrivalListItem from '../../components/ArrivalListItem'


const ArrivalList = (props) => {

    const {
        match
    } = props;
    const {station, direction} = match.params;
    function renderArrivalList(data) {

        return (
            <Fragment>
                {data.arrivals.map((arrival) => {
                    return (
                        <ArrivalListItem
                            line={arrival.line}
                            direction={arrival.direction}
                            ETA={"8"}
                            scheduled={"7:39 PM"}
                            actual={"7:42 PM"}
                            timeToDestination={"16"}
                        />
                    );
                })}
            </Fragment>
        );
    }

    return (
        <Fetcher action={api.fetchArrivalsByStationAndDirection(station, direction)}>

            {data => renderArrivalList(data)}

        </Fetcher>
    );
};

export default ArrivalList;