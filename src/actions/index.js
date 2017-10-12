import { ROOT_URL, DRIBBBLE_ACCESS_TOKEN } from '../configuration/constants';
import { POPULAR_DRIBBBLE_SHOTS, FIND_DRIBBBLE_BY_ID } from './types';
import axios from 'axios';

export function popularDibbbleShots() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}?access_token=${DRIBBBLE_ACCESS_TOKEN}&sort=views`).then(response => {
      dispatch({
        type: POPULAR_DRIBBBLE_SHOTS,
        payload: response
      })
    });
  }
}

export function findDribbbleShotById(id) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/${id}?access_token=${DRIBBBLE_ACCESS_TOKEN}`).then(response => {
      dispatch({
        type: FIND_DRIBBBLE_BY_ID,
        payload: response
      })
    });
  }
}
