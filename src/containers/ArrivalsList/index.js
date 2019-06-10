import React, { Fragment, useEffect } from "react";
import styled from 'styled-components';
import Fetcher from "../../components/Fetcher";
import api from '../../api';
import ArrivalListItem from '../../components/ArrivalListItem'


const ArrivalList = (props) => {

    const {
        match,
        station,
    } = props;

    const {direction} = match.params;
    function renderArrivalList(data) {
        return (
            <Fragment>
                {data.map((arrival) => {
                    return (
                        <div>{console.log('arrival', arrival)}</div>
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