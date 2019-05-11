import {getScheduleType} from "./utils";

const fetchScheduleByStationAndDay = (station, day) => async () => {
    
    const response = await fetch(`localhost:3000/api/static/schedule/station?schedule=${day}&station=${station}`, {mode: 'cors'});
    const jsonData = response.json();
    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }
    return jsonData;
}

const fetchArrivalsByLineAndStation = (line, station) => async () => {
    
    const response = await fetch(`localhost:3000/api/live/schedule/line?line=${line}`, {mode: 'cors'});
    let jsonData = response.json();
    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }

    jsonData = jsonData.filter((arrival) => {
            return arrival.station === station.toUpperCase();
    })
    return jsonData;
}

const fetchlines = async () => {
    
    const response = await fetch(`localhost:3000/api/static/lines`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }
    return jsonData;
}

const fetchDirections = async () => {
    
    const response = await fetch(`localhost:3000/api/static/directions`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }
    return jsonData;
}

const fetchStationsByLineAndDirection = (line, direction) => async () => {

    const schedule = getScheduleType(new Date());
    const response = await fetch(`http://localhost:3000/api/static/stations?line=${line}&direction=${direction}&schedule=${schedule}`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }
    return jsonData;
};

const fetchStationsByLocation = () => async () => {
    
     const location = new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                resolve(position.coords);
            });
        } else {
            throw new Error("geolocation srvices are disabled");
        }
    });
    
    const position = await location;
    const response = await fetch(`http://localhost:3000/api/static/stations/location?latitude=${position.latitude}&longitude=${position.longitude}`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }
    return jsonData;
}

export default {
    fetchStationsByLineAndDirection,
    fetchArrivalsByLineAndStation,
    fetchDirections,
    fetchlines,
    fetchScheduleByStationAndDay,
    fetchStationsByLocation
};





