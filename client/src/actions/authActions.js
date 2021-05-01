import axios from 'axios'
import setAuthToken from '../util/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER } from './types'

//Register User
export const registerUser = (userData, history) => (dispatch) => {
  console.log('registering user')
  axios
    .post('http://localhost:5000/api/users/register', userData, {
      headers: { 'Access-Control-Allow-Origin': '*' },
    })
    .then((res) => {
      console.log(res)
      history.push('/login')
    })
    .catch((err) => {
      console.log(err.response.data)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    })
}

//Login
export const loginUser = (userData) => (dispatch) => {
  axios
    .post('/api/users/login', userData)
    .then((res) => {
      const { token } = res.data
      // Set token to localStorage
      localStorage.setItem('jwtToken', token)
      // Set token to Auth header
      setAuthToken(token)
      const decoded = jwt_decode(token)
      // Set current user
      dispatch(setCurrentUser(decoded))
    })
    .catch((err) => {
      console.log(err)
      console.log(err.response.data)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    })
}

// Set logged in user
export const setCurrentUser = (decoded_data) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded_data,
  }
}

// Logout user
export const logoutUser = (dispatch) => {
  console.log('Remove token from local storage')
  // Remove token from local storage
  localStorage.removeItem('jwtToken')
  // Remove auth header for future requests
  setAuthToken(false)
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}))
}
