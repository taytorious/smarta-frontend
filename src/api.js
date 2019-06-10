import {getScheduleType} from "./utils";
import Stations from './constants/stations';
import Directions from './constants/directionKey'
import {capitalizeFirstLetter} from "./utils/utils";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchScheduleByStationAndDay = (station, day) => async () => {
    
    const response = await fetch(`${BASE_URL}/api/static/schedule/station?schedule=${day}&station=${station}`, {mode: 'cors'});
    const jsonData = response.json();
    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }
    return jsonData;
}

const fetchArrivalsByLineAndStation = (line, station) => async () => {
    console.log(line, station, 'second')
    const response = await fetch(`http://smarta-api.herokuapp.com/api/live/schedule/line?line=${line}`, {mode: 'cors'});
    let jsonData = response.json();
    const ArrivalPromise = new Promise((resolve, reject) => {
        if (!response.ok) {
            reject(jsonData, response);
            throw new Error(jsonData, response.statusCode);
        }

        jsonData = jsonData.filter((arrival) => {
            return arrival.station === station.toUpperCase();
        })
        resolve(jsonData)
    });

    return ArrivalPromise;
}

const fetchlines = async () => {
    const response = await fetch(`${BASE_URL}/api/static/lines`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
        // this is a custom exception class that stores JSON data
    }
    return jsonData;
}

const fetchDirections = async () => {
    
    const response = await fetch(`${BASE_URL}/api/static/directions`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
    }
    return jsonData;
}

const fetchStationsByLineAndDirection = (line, direction) => async () => {
    const schedule = getScheduleType(new Date());
    const response = await fetch(`${BASE_URL}/api/static/stations?line=${line}&direction=${direction}&schedule=${schedule}`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
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
            throw new Error("geolocation services are disabled");
        }
    });
    const position = await location;
    const response = await fetch(`${BASE_URL}/api/static/stations/location?latitude=${position.latitude}&longitude=${position.longitude}`, {mode: 'cors'});
    const jsonData = response.json();

    if (!response.ok) {
        throw new Error(jsonData, response.statusCode);
    }
    return jsonData;
};

const fetchArrivalsByStationAndDirection = (station, direction) => async () => {
    const lines = Stations[station].directions[direction];
    let responsePromises = [];
    for(const line of lines) {
        const newArrivals = fetch(`http://smarta-api.herokuapp.com/api/live/schedule/line/${capitalizeFirstLetter(line)}`, {mode: 'cors'});
        responsePromises.push(newArrivals)
    }
    const responses = await Promise.all(responsePromises);

    let jsonData = responses.map((response) => {

        if (!response.ok) {
            throw new Error(response.body, response.statusCode);
        }

        return response.json();
    });

    let flattenedData = [];
    jsonData.forEach((line) => {
        console.log(line);
        flattenedData.push(line.filter((arrival) => {
            return arrival.station.name === Stations[station].name && arrival.station.direction === Directions[direction];
        }));
    });
    flattenedData = flattenedData.flat();
    console.log(flattenedData);

    return jsonData;
};

export default {
    fetchStationsByLineAndDirection,
    fetchArrivalsByLineAndStation,
    fetchDirections,
    fetchlines,
    fetchScheduleByStationAndDay,
    fetchStationsByLocation,
    fetchArrivalsByStationAndDirection
};





