// import {
//     ADD_QUIZ,
//     DELETE_QUESTION,
//     SET_CURRENT, 
//     CLEAR_CURRENT, 
//     UPDATE_QUIZ,
//     CLEAR_FILTER_QUIZ,
//     QUIZ_ERROR, 
//     FILTER_QUIZZES
// } from '../types';

// export default (state, action) => {
//     switch (action.type) {



//         case: FILTER_QUIZZES;
//             return {
//                 ...state,
//                 filtered: state.quizzes.filter(quiz => {
//                     const regex = new RegExp(`${action.payload}`, 'gi' ) //gi global and case insensitive
//                     return quiz.quizTitle.match(regex); //returns matching quizTitle passed in
//                 })
//             };
//         default:
//             return state;
//     }
// }