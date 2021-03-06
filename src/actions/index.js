import { FETCH_EVENTS, CREATE_PLAYDATE, CREATE_FAMILY,
        CREATE_PARENT, CREATE_CHILD, CREATE_LOGIN, LOGOUT, JOIN_PLAYDATE, GET_PLAYDATE } from './types'

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

  export const postLoginInfo = (family) => {
    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/auth', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(family)
      })
      .then(resp => resp.json())
      .then(result => {
        dispatch({
          type: CREATE_LOGIN,
          payload: result
        })
      })
    }

  }

  export const logout = () => {
    return {
      type: LOGOUT

      }
    }

    export const joinPlaydate = (playdate) => {
      return (dispatch) => {
        return fetch('http://localhost:3000/api/v1/playdates', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
          },
          body: JSON.stringify(playdate)
        })
        .then(resp => resp.json())
        .then(result => {
          dispatch({
          type: JOIN_PLAYDATE,
          payload: result
        })
      })
      }
    }

    // export const getPlaydates = (id) => {
    //   return (dispatch) => {
    //     return fetch('http://localhost:3000/api/v1/playdates', {
    //       method: 'GET',
    //       headers: {
    //         'content-type': 'application/json',
    //         'accept': 'application/json'
    //       }
    //     })
    //     .then(resp => resp.json())
    //     .then(result => {
    //       dispatch({
    //       type: GET_PLAYDATE,
    //       payload: result
    //     })
    //   })
    //   }
    // }



  // componentDidMount () {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     const options =   {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //         'Authorization': token
  //       }
  //     }
  //     fetch('http://localhost:3001/api/v1/reauth', options)
  //     .then(resp => resp.json())
  //     .then(family => {
  //       this.setState({
  //           auth: {
  //             currentFamily: family
  //           }
  //         })
  //
  //       })
  //   }
  // }
