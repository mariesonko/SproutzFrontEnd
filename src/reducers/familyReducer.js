import { CREATE_FAMILY, CREATE_PARENT, CREATE_CHILD } from '../actions/types';

  const initialState = {
      family: [],
      parents: [],
      children: []
    }

function familyReducer(state = initialState, action){
  switch (action.type) {
    case CREATE_FAMILY:
    return {
            ...state,
            family: action.payload
            }
    case CREATE_PARENT:
    return {
          ...state,
          parents: action.payload

            }

    case CREATE_CHILD:
    return {
          ...state,
          children: action.payload
        }
    default:
    return state

  }
}

export default familyReducer
