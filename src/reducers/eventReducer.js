import { FETCH_EVENTS, CREATE_PLAYDATE, JOIN_PLAYDATE } from '../actions/types';

  const initialState = {
    items: [],
    item: {}
  }

function eventReducer(state = initialState, action){
  switch (action.type) {
    case FETCH_EVENTS:
    return {
          ...state,
          items: action.payload
            }

    case CREATE_PLAYDATE:
    return {
          ...state,
          items: [ ...initialState.items, action.payload ]
        }

    case JOIN_PLAYDATE:
    return {
          ...state,
          items: [ ...initialState.items, action.payload ]
        }
    default:
    return state

  }
}

export default eventReducer
