import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import store from './Store';

import Dashboard from './components/dashboard/Dashboard';
import SLDataDashborad from './components/SLData/SLDataDashborad'

function App() {
  return (

    <Provider store = {store}>
		<Router>
			<>
			<div className="App">
				<Switch>
                  <Route exact path="/" component={Dashboard} />
				  <Route exact path="/more-SLdata-covid19" component={SLDataDashborad} />
                </Switch>
			</div>
			</>
		</Router>
    </Provider>
    
  );
}

export default App;
