import {GET_GRAPH_RAPID} from '../action/type';

const initilaState = {
    rapid_covid_graph_obj : {}
    
};

export default (state = initilaState, action) => {
    switch(action.type){
        case GET_GRAPH_RAPID:
            return {
                rapid_covid_graph_obj: action.payload
            }

        default: 
            return state;
    }
}