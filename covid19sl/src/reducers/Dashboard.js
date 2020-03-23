import {GET_COVID_HPB} from '../action/type';

const initilaState = {
    HBP_covid_obj : {}
    
};

export default (state = initilaState, action) => {
    switch(action.type){
        case GET_COVID_HPB:
            return {
                HBP_covid_obj: action.payload
            }

        
        default: 
            return state;
    }
}