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
            return {...state,
                questions: [...state.questions, action.payload]  //will update the state and the question in ui
            }
        default: 
            return state;
           
    }   
}