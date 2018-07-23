import { FETCH_EVENTS, NEW_EVENTS } from '../actions/types';

  const initialState = {
    items: [],
    item: {}
  }

function eventReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_EVENTS:
    return { ...state, items: action.payload }
    default:
    return state

  }
}

export default eventReducer
