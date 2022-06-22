import _ from 'lodash';

import {
    FETCH_RACERSTREAMS
} from '../actions/types';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_RACERSTREAMS:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        default:
            return state;
    }
}