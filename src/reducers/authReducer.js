import { CREATE_LOGIN, LOGOUT, JOIN_PLAYDATE } from '../actions/types';

  const initialState = {
      current_family: {}

    }

function authReducer(state = initialState, action){
  switch (action.type) {
    case CREATE_LOGIN:
    console.log(action);
      return {
            ...state,
            current_family: action.payload
            }
    case LOGOUT:
      return initialState

    case JOIN_PLAYDATE:
      return {
            ...state,
            current_family : {...state.current_family,
                passive_playdates: [ ...state.current_family.passive_playdates, action.payload ]
        }
        }

    default:
      return state

  }
}

export default authReducer
