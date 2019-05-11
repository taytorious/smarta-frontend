import React from "react";
import Fetcher from "../Fetcher/Fetcher";
import api from "../../api"

const StationList = ({line, direction}) => {
    function renderStationList(data) {
        
        return (
            <div className="list">
                {data.stations.map((station) => {
                    return <div key={station["station-name"]} className="list__item">{station["station-name"]}</div>
                })}
            </div>
        );
    }
    
    return (
        <Fetcher action={api.fetchStationsByLocation(line, direction)}>
            
                {data => renderStationList(data)}
            
        </Fetcher>
    );
}

export default StationList;