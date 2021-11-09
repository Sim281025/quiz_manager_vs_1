import React from 'react';
import Questions from '../questions/Questions';
import QuestionForm from '../questions/QuestionForm';


//Conditional rendering for the grid from 2 to 1
//remove the form if role is: basic or viewer and center questions if 

const Quizquestions = () => {
    return (
        <div className='page'>
            <div className="grid-2">
                <div>
                    <QuestionForm />
                    {/* Question form. Conditional rendering only for Admin role otherwise hidden */}
                </div>
                 <div>
                    <Questions />
                    {/* Questions displayed here. Conditional rendering for basic, viewer and admin */}
                </div>  
            </div>
        </div>
    )
}

export default Quizquestions;