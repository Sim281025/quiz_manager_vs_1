import React, { useContext, useRef, useEffect } from 'react';
import QuestionContext from '../../context/quiz/quizContext';

//This will be the search filter logic to search through the quizzes



 const QuizFilter = () => {
//     const quizContext = useContext(quizContext);
//     const text = useRef(''); //initialise useRef hook. Nothing by default

//     const { filterQuizzes, clearFilterQuiz, filtered } = quizContext;

//     useEffect(() => {
//         if(filtered === null) {
//             text.current.value = ''; // we can access this as we used useRef
//         }
//     });

    
//     const onChange = e => {
//        if (text.current.value !== '') { //If NOT equal to nothing, so if something is in there then..
//             //quizContext.filterQuizzes(e.target.value);
//             filterQuizzes(e.target.value);
//        } else {
//            //quizContext.clearFilterQuiz();
//            clearFilterQuiz();
//        }
//     }



    return (
        <form>
           <input className='searchStyle'  type="text" placeholder="Search Quizzes..." />
        </form>
    )
}

//           <input ref={text} type="text" placeholder="Filter Quizzes..." onChange={onChange}/>


export default QuizFilter;
