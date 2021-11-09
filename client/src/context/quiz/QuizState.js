import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid'; // generate random id before linking to backend. Used to mimic mongoDB Id 
import QuizContext from './quizContext';
import quizReducer from './quizReducer';

import {
    ADD_QUIZ,
    DELETE_QUESTION,
    SET_CURRENT, 
    CLEAR_CURRENT, 
    UPDATE_QUIZ,
    //FILTER_QUIZZES,
    CLEAR_FILTER_QUIZ,
    QUIZ_ERROR, 
    FILTER_QUIZZES
} from '../types';


const QuizState = props => {  //make request to back end here and it will fill up
    const initialState = {
        quizzes: [
            {
                id: 1,
                userId: 234,
                quizTitle: 'Music Quiz'
            },
            {
                id: 2,
                userId: 987,
                quizTitle: 'Biology Quiz'
            },
            {
                id: 3,
                userId: 456,
                quizTitle: 'English Quiz'
            }
        ],
        current:null,
        filtered: null
    };

    const [state, dispatch] = useReducer(quizReducer, initialState);

    //Add Quiz

    //Delete Quiz

    //Set Current Quiz

    //Clear Current Quiz

    //Update Quiz

    // //Filter Quizzes
    // const filterQuizzes = text => {
    //     dispatch({ type: FILTER_QUIZZES, payload:text });
    // };

    // //Clear Filter
    // const clearFilter = () => {
    //     dispatch({ type: CLEAR_FILTER_QUIZ });
    // }

    return ( 
        <QuizContext.Provider
           value={{
                quizzes: state.quizzes
            }}>
            {  props.children}
        </QuizContext.Provider>
    )
};

export default QuizState