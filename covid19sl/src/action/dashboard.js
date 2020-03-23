import {GET_COVID_HPB} from '../action/type';

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