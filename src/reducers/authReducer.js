import { CREATE_LOGIN } from '../actions/types';

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
      
    default:
      return state

  }
}

export default authReducer
