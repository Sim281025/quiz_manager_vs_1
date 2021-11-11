import React, { useReducer } from 'react';  //to have access to state and dispatch
import { v4 as uuid } from 'uuid'; // generate random id before linking to backend. Used to mimic mongoDB Id 
import QuestionContext from './questionContext';
import questionReducer from './questionReducer';

import {
    ADD_QUESTION,
    DELETE_QUESTION,
  //DELETE_QUIZ_TITLE
  //UPDATE_QUIZ_TITLE
    SET_CURRENT, 
    CLEAR_CURRENT, 
    UPDATE_QUESTION,
    //FILTER_QUESTIONS,
    //CLEAR_FILTER_QUESTION,
  //  QUESTION_ERROR 
} from '../types';

const QuestionState = props => {  //initially empty then makes a request to backend and fills up. This is hard coded to use before api integration.
    const initialState = {
        questions: [
            {
                id: 1,
                quizId: 1234,
                  questionText: 'What is H2O?',
                  answerOptions: [
                    'amonia',
                    'water',
                    'sulphur',
                    'peroxide'
                  ],
                  correctAnswer: 'water',
            },
            {
                id: 2,
                quizId: 3456,
                  questionText: 'What does a nucleus in a molecule contain?',
                  answerOptions: [
                    'protons, neutrons, and electrons',
                    'water',
                    'amonia',
                    'subtrons and millitrons'
                  ], 
                  correctAnswer: 'protons, neutrons, and electrons',   
            },
            {
                id: 3,
                quizId: 6789,
                  questionText: 'Where do leaves get their green colour from?',
                  answerOptions: [
                    'mitochondria in cells',
                    'soil',
                    'chlorophyll',
                    'maxions'
                  ],
                  correctAnswer: 'chlorophyll'  

            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(questionReducer, initialState);
    //make request to back end here
   
    //Add Question
    //will reach out to api and db
    const addQuestion = question => {       //question comes in and we send it to the payload        //a response from backend will be sent to payload and then dispatched to the reducer
      question.id = uuid();
      dispatch({ type: ADD_QUESTION, payload: question });
    }

    //Delete Question
    const deleteQuestion = id => {     // take in question id and delete the payload id/question
      dispatch({ type: DELETE_QUESTION, payload: id });
    }

    //Set Current Question
    const setCurrent = question => {  //current is a state that holds data from question. Used in edit
      dispatch({ type: SET_CURRENT, payload: question });
    }

    //Clear Current Question
    const clearCurrent = question => {     // clears current back to null
      dispatch({ type: CLEAR_CURRENT, payload: question });
    }

    //Update Question
    const updateQuestion = question => {  //current is a state that holds data from question. Used in edit
      dispatch({ type: UPDATE_QUESTION, payload: question });
    }

    //Filter Questions

    //Clear Filter

    return (
       <QuestionContext.Provider
        value={{ 
          questions: state.questions,
          current: state.current,
          addQuestion,
          deleteQuestion,
          setCurrent,
          clearCurrent,
          updateQuestion
         }} >
         { props.children }
       </QuestionContext.Provider>
    )

}

export default QuestionState;