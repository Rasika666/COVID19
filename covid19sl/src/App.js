import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import store from './Store';

import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (

    <Provider store = {store}>
		<Router>
			<>
			<div className="App">
				<Switch>
                  <Route exact path="/" component={Dashboard} />
                </Switch>
			</div>
			</>
		</Router>
    </Provider>
    
  );
}

export default App;
