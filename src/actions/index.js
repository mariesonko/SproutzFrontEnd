import { FETCH_EVENTS } from './types'
export const getEvents = ()=> {
  //need access to dispatch
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/events')
  .then(resp => resp.json())
  .then(result => dispatch({
    type: FETCH_EVENTS,
    payload: result
  }))
  }
}
