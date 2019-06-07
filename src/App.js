import React from 'react';
import GlobalStyle from './global-styles';
import styled from 'styled-components';
import Header from './components/Header';
import StationList from "./containers/StationList";
import DirectionSelector from './components/DirectionSelector';
import ArrivalList from './containers/ArrivalsList'
import api from './api';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const ContentWell = styled.div`
  padding: 71px 0 0;
`;

function App() {
  return (
      <Router>
          <div className="">
              <GlobalStyle/>
              <Header />
              <ContentWell>
                  <StationList line={"red"} direction={"southbound"} fetch={api.fetchStationsByLocation()}/>
                  <Route
                      path="/:id"
                      component={DirectionSelector} />
              </ContentWell>
        </div>
      </Router>
  );
}

export default App;
