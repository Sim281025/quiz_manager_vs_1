import React, { useReducer } from 'react';  //to have access to state and dispatch
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { v4 as uuid } from 'uuid'; // generate random id before linking to backend. Used to mimic mongoDB Id 


import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {  //initially empty then makes a request to backend and fills up. This is hard coded to use before api integration.
    const initialState = []; //array of alert objects so you need a  unique identifier
    

    const [state, dispatch] = useReducer(alertReducer, initialState);
    //make request to back end here
   
    //ACTIONS
    //SET ALERT  (also removes alert)
    const setAlert = (msg, type, timeout=5000) => {  //You can change the timeout for different alert this way
        const id = uuid();
        dispatch({
            type: SET_ALERT, 
            payload: { msg, type, id }
        });

        setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
    };

  
    

    return (
       <AlertContext.Provider
        value={{ 
          alerts: state,
          setAlert
         }} >
         { props.children }
       </AlertContext.Provider>
    )

}

export default AlertState;