import { FETCH_EVENTS, CREATE_PLAYDATE  } from './types'

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

  export const postPlaydate = (playdate) => {
    return (dispatch) => {
      debugger
      fetch('http://localhost:3000/api/v1/events', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(playdate)
      })
      .then(resp => resp.json())
      .then(result => dispatch({
        type: CREATE_PLAYDATE,
        payload: result
      }))
    }
  }
