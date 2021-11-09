import React, { Fragment, useContext  } from 'react';
import QuizContext from '../../context/quiz/quizContext';
import QuizItem from './QuizItem';
//pull in quiz from the state and loop through them with map and create a list and out put the list in the QuizItem 

const Quizzes = () => {
    const quizContext = useContext(QuizContext);

    const { quizzes } = quizContext;
    return (
        <Fragment>
            <h3 className="center-text page">Select a quiz by clicking on the green buttons below.</h3>
            <div className='grid-3'>
                {quizzes.map(quiz => (
                    <QuizItem  key={quiz.id} quiz={quiz}/>
                ))}
            </div>
        </Fragment>
    )
}

export default Quizzes;
