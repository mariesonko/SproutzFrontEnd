import { FETCH_EVENTS, CREATE_PLAYDATE, CREATE_FAMILY, CREATE_PARENT, CREATE_CHILD  } from './types'

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

  export const postNewFamily = (family) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/families', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(family)
      })
      .then(resp => resp.json())
      .then(result => dispatch({
        type: CREATE_FAMILY,
        payload: result
      }))
    }
  }


  export const postNewParent = (parent) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/parents', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(parent)
      })
      .then(resp => resp.json())
      .then(result => dispatch({
        type: CREATE_PARENT,
        payload: result
      }))
    }
  }

  export const postNewChild = (child) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/children', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(child)
      })
      .then(resp => resp.json())
      .then(result => dispatch({
        type: CREATE_CHILD,
        payload: result
      }))
    }
  }