import React from 'react';
import './App.css';
import './global-styles';
import Header from './components/Header';
import StationList from "./containers/StationList/StationList";
import api from './api';

function App() {
  return (
    <div className="">
      <Header />
      <StationList line={"red"} direction={"southbound"} fetch={api.fetchStationsByLocation()}/>
    </div>
  );
}

export default App;
