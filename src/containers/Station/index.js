import React, { useState, useEffect, Fragment } from 'react';
import { Route } from "react-router-dom";

import Stations from '../../constants/stations';
import ArrivalList from "../../containers/ArrivalsList";
import DirectionSelector from '../../components/DirectionSelector'


const Station = (props) => {
    const {
        match,
        history
    } = props;
    let {station} = match.params;
    const stationKey = station.replace(/Station/gi, '').trim().replace('-', "");
    const directions = Stations[stationKey].directions;

    const [shouldShowPicker, setShouldShowPicker] = useState(true);

    useEffect(() => {
        setShouldShowPicker(history.action === "POP");
    });

    return (
        <Fragment>
            {shouldShowPicker && <DirectionSelector directions={directions} url={match.url}/>}
            <Route
                path={`${match.url}/:direction`}
                render={(props) => { setShouldShowPicker(false); return <ArrivalList  {...props} station={stationKey} />}} />
        </Fragment>
    );
};



export default Station;

