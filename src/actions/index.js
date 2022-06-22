import _ from 'lodash';
import raceStream from '../apis/raceStream';

import {
    FETCH_RACERSTREAMS
} from './types';

export const fetchRacerStream = () => async dispatch => {
    const response = await raceStream.racerURL.get();
    dispatch({type: FETCH_RACERSTREAMS, payload: response.data});
}
