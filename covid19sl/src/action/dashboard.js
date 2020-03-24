import {GET_COVID_HPB, GET_SRILANKA_RAPID, GET_WORLD_RAPID} from '../action/type';
import {x_rapidapi_host,x_rapidapi_key} from '../CONST';

export const getCOVID_Data = () => dispatch => {

    fetch('https://www.healthpromo.gov.lk/api/get-current-statistical')
            .then(response => response.json())
            .then(data => 
                dispatch({
                type : GET_COVID_HPB,
                payload : data
            })
            );


    
}

export const getCOVID_SLData_rapidAPI = () => dispatch => {
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=Sri%20Lanka", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": x_rapidapi_host,
		"x-rapidapi-key": x_rapidapi_key
	}
    })
    .then(response => response.json())
    .then( 
        data => dispatch({
        type : GET_SRILANKA_RAPID,
        payload : data
        })
    
        
    )
    .catch(err => {
        console.log(err);
    });
}

export const getCovid_worldData_rapidAPI = () => dispatch => {
    fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "7403e9f7f2msh9e1355ba9a10b01p15072ajsn913736268756"
	}
    })
    .then(response => response.json())
    .then(
        data => dispatch({
        type : GET_WORLD_RAPID,
        payload : data
        })
    )
    .catch(err => {
        console.log(err);
    });
}