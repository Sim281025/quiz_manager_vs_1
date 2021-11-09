import React, { useReducer } from 'react';
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
    QUESTION_ERROR 
} from '../types';

const QuestionState = props => {
    const initialState = {
        questions: [
            {
                _id: 1,
                quizId: 1234,
                  questionText: 'What is H2O?',
                  // answerOptions: [
                  //   'amonia',
                  //   'water',
                  //   'sulphur',
                  //   'peroxide'
                  // ],
                  answerOption1: 'amonia',
                  answerOption2: 'water',
                  answerOption3: 'sulphur',
                  answerOption4: 'peroxide',
                  
                  correctAnswer: 'water',
            },
            {
                _id: 2,
                quizId: 3456,
                  questionText: 'What does a nucleus in a molecule contain?',
                  // answerOptions: [
                  //   'protons, neutrons, and electrons',
                  //   'water',
                  //   'amonia',
                  //   'subtrons and millitrons'
                  // ],
                  answerOption1: 'protons, neutrons, and electrons',
                  answerOption2: 'water',
                  answerOption3: 'amonia',
                  answerOption4: 'subtrons and millitrons',
                  correctAnswer: 'protons, neutrons, and electrons'
            },
            {
                _id: 3,
                quizId: 6789,
                  questionText: 'Where do leaves get their green colour from?',
                  // answerOptions: [
                  //   'mitochondria in cells',
                  //   'soil',
                  //   'chlorophyll',
                  //   'maxions'
                  // ],
                  answerOption1: 'mitochondria in cells',
                  answerOption2: 'soil',
                  answerOption3: 'chlorophyll',
                  answerOption4: 'maxions',
                  correctAnswer: 'chlorophyll'
            },
          //   {
          //     _id: 4,
          //     quizId: 0974,
          //     questionText: 'What is iris a part of?'
          // }
        ]
    };

    const [state, dispatch] = useReducer(questionReducer, initialState);
    //make request to back end here
    console.log(state);
    //Add Question
    //will reach out to api and db
    const addQuestion = question => {       //question comes in and we send it to the payload
      question.id = uuid;
      dispatch({ type: ADD_QUESTION, payload: question });  //a response from backend will be sent to payload and then dispatched to the reducer
    }

    //Delete Question

    //Set Current Question

    //Clear Current Question

    //Update Question

    //Filter Questions

    //Clear Filter

    return (
        <QuestionContext.Provider
            value={{
                questions: state.questions,
                addQuestion
            }}>
                { props.children }
        </QuestionContext.Provider>
    )

}

export default QuestionState;