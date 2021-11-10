import {
    ADD_QUESTION,
    DELETE_QUESTION,
  //DELETE_QUIZ_TITLE,
  //UPDATE_QUIZ_TITLE,
  //ADD_QUESTION,
    SET_CURRENT, 
    CLEAR_CURRENT, 
    UPDATE_QUESTION,
    QUESTION_ERROR 
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_QUESTION:
            return {
                ...state,
                questions: [...state.questions, action.payload]  //will update the state and the question in ui
            };
        case DELETE_QUESTION:
            return {
                ...state,  //current array
                questions: state.questions.filter(question => question.id !== action.payload)  //will return all questions that are not the current question id. action.payload = questionId to be deleted
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload  
            }; 
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null  
            }; 
        default: 
            return state;
           
    }   
}