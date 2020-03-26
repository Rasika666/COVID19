import {combineReducers} from 'redux';
import Dashboard from './Dashboard';
import SlDashboard from './SlDashboard';
import Graph from './Graph'


export default combineReducers({
    covid_data : Dashboard,
    rapid_covid_data : SlDashboard,
    rapid_graph_data : Graph
});