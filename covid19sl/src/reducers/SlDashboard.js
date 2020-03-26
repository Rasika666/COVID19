import {GET_SRILANKA_RAPID} from '../action/type';

const initilaState = {
    rapid_covid_obj : {}
    
};

export default (state = initilaState, action) => {
    switch(action.type){
        case GET_SRILANKA_RAPID:
            return {
                rapid_covid_obj: action.payload
            }

        default: 
            return state;
    }
}