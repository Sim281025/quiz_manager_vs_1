import React, { Link } from 'react';

const QuizAdd = () => {
    //conditional render for admin only
    //links to quizquestion page with just form and no questions and answers in the state
    return (              
        <div className='bg-primary card3 text-center'>
            <h3>Add New Quiz</h3>
        </div>       
    )
}

export default QuizAdd;
