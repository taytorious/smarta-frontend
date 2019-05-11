import React from 'react';
import './App.css';
import StationList from "./components/StationList";

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
