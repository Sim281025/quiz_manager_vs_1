import  { Fragment, useContext } from 'react';
import QuestionContext from '../../context/question/questionContext';
import QuestionItem from './QuestionItem';
import QuizContext from '../../context/quiz/quizContext';


import React from 'react'

//pull in question item from questions array from the state. Iterate through object array with map and output question, answerOption string array, and correct question 
//Pull in quiz Title and display and carry out update delete.

const Questions = () => {
    const questionContext = useContext(QuestionContext);
    const quizContext = useContext(QuizContext);


    const { questions } = questionContext;
    const { quizzes } = quizContext;


    //console.log('*************questions', questions);

    return (
        <Fragment>
            <div>
                <h3>Quiz Title from quiz objectId quizTitle property</h3>
            </div>
            {questions.map(question =>(
                <QuestionItem key={question.id} question={question}/>
            ))}
        </Fragment>
    )
}

export default Questions;



