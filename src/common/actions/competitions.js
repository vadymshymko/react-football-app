import { normalize } from 'normalizr';
import { competitions as schema } from 'schemas';
import { competitions as types } from 'types';
import {
  getIsCompetitionsInitialized,
  getIsCompetitionsFetching,
} from 'selectors';
import { callApi } from 'utils';

export const fetchCompetitions = () => (dispatch, getState) => {
  const state = getState();

  const isFetching = getIsCompetitionsFetching(state);
  const isInitialized = getIsCompetitionsInitialized(state);

  if (isInitialized || isFetching) {
    return Promise.resolve();
  }

  dispatch({
    type: types.FETCH_COMPETITIONS_REQUEST,
  });

  return callApi('competitions?plan=TIER_ONE').then((json) => {
    const {
      entities: {
        competitions: entities = {},
      },
      result: ids = [],
    } = normalize(json.competitions, schema);

    return dispatch({
      type: types.FETCH_COMPETITIONS_SUCCESS,
      payload: {
        entities,
        ids,
      },
    });
  }).catch(() => dispatch({
    type: types.FETCH_COMPETITIONS_FAILURE,
  }));
};

export default fetchCompetitions;
