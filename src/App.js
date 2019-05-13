import React from 'react';
import './App.css';
import './global-styles';
import StationList from "./containers/StationList/StationList";

function App() {
  return (
    <div className="">
      <header className="">
      </header>
      <StationList line={"red"} direction={"southbound"}></StationList>
    </div>
  );
}

export default App;
