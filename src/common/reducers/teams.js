import { createReducer } from 'utils';
import { teams as types } from 'types';

const teamsInitialState = {
  entities: {},
  ids: [],
};

const teamInitialState = {
  isFetching: false,
  isInitialized: false,
  isRequestFailed: false,
};

const team = createReducer(teamInitialState, {
  [types.FETCH_TEAM_REQUEST]: (state, action) => ({
    ...state,
    id: action.payload.id,
    isFetching: true,
    isInitialized: false,
    isRequestFailed: false,
  }),

  [types.FETCH_TEAM_SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
    isFetching: false,
    isInitialized: true,
  }),

  [types.FETCH_TEAM_FAILURE]: state => ({
    ...state,
    isFetching: false,
    isInitialized: true,
    isRequestFailed: true,
  }),
});

const teams = createReducer(teamsInitialState, {
  [types.FETCH_TEAM_REQUEST]: (state, action) => ({
    ...state,
    entities: {
      ...state.entities,
      [action.payload.id]: team(state[action.payload.id], action),
    },
    ids: [
      ...state.ids,
      action.payload.id,
    ],
  }),

  [types.FETCH_TEAM_SUCCESS]: (state, action) => ({
    ...state,
    entities: {
      ...state.entities,
      [action.payload.id]: team(state[action.payload.id], action),
    },
  }),

  [types.FETCH_TEAM_FAILURE]: (state, action) => ({
    ...state,
    entities: {
      ...state.entities,
      [action.payload.id]: team(state[action.payload.id], action),
    },
  }),
});

export default teams;