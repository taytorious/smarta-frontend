import React from 'react';
import GlobalStyle from './global-styles';
import styled from 'styled-components';
import Header from './components/Header';
import StationList from "./containers/StationList";
import Station from './containers/Station';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
                  <Switch>
                      <Route
                          path="/:station"
                          component={Station} />
                      <Route
                          path="/"
                          component={StationList} />
                  </Switch>
              </ContentWell>
        </div>
      </Router>
  );
}

export default App;
