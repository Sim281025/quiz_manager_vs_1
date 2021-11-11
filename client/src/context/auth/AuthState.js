import React, { useReducer } from 'react';  //to have access to state and dispatch
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types';
import axios from 'axios';

const AuthState = props => {  //initially empty then makes a request to backend and fills up. This is hard coded to use before api integration.
    const initialState = {
       token: localStorage.getItem('token'),
       isAuthenticated: null,
       loading: true,
       user: null,
       error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);
    //make request to back end here
   
    //LOAD USER (checks which user is logged in, gets user data)
    const loadUser = async () => {
      if(localStorage.token) {
        setAuthToken(localStorage.token) //setAuthToken is a global header found in utils
      }
      try {
        const res = await axios.get('/api/auth');

        dispatch({
          type: USER_LOADED, 
          payload: res.data
        });
      } catch (err) {
        dispatch({ type: AUTH_ERROR})
      }
    };


    //REGISTER USER 
    const register = async formData => {
      const config ={
        headers: {
          'Content-Type': 'application/json'
        }
      }

      try {
        const res = await axios.post('/api/users', formData, config);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data
        });
        loadUser();
      } catch (err) {  //if error returned from backend then catch(err) is called
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response.data.msg  //msg to get msg from routes/users.js
        })
      }
    }

    //LOGIN USER
    const login = async formData => {
      const config ={
        headers: {
          'Content-Type': 'application/json'
        }
      }

      try {
        const res = await axios.post('/api/auth', formData, config);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data
        });
        loadUser();
      } catch (err) {  //if error returned from backend then catch(err) is called
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response.data.msg  //msg to get msg from routes/users.js
        })
      }
    }

    //LOGOUT USER
    const logout = () => dispatch({ type: LOGOUT });


    //CLEAR ERRORS
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

    return (
       <AuthContext.Provider
        value={{ 
          token: state.token,
          isAuthenticated: state.isAuthenticated,
          loading: state.loading,
          user: state.user,
          error: state.error,
          register,
          loadUser,
          login,
          logout,
          clearErrors
         }} >
         { props.children }
       </AuthContext.Provider>
    )

}

export default AuthState;