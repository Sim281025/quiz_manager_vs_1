import React, { useState, useContext } from 'react';
import QuestionContext from '../../context/question/questionContext';

//Conditional rendering. The form does not display if user role is basic or viewer.
//I need userId to access the role.

const QuestionForm = () => {
    const questionContext = useContext(QuestionContext); //we need the function addQuestion in QuestionState. useContext to get access

    const [question, setQuestion] = useState({
       // _id,
       // quizId,
        questionText: '',
        answerOption1: '',
        answerOption2: '',
        answerOption3: '',
        answerOption4: '',
        correctAnswer: ''
    });

    //map through answerOptions array and change key for each value to answerOption[indexNumber starting from 1]: value
    //add this function to destructure below
   // const { questionText, answerOptions, correctAnswer } = question;
    const { questionText, answerOption1, answerOption2, answerOption3, answerOption4, correctAnswer } = question;
    

    const onChange = e => setQuestion({ ...question, [e.target.name]: e.target.value });
    

    const onSubmit = e => {
        e.preventDefault();
        questionContext.addQuestion(question);  //addQuestion() function is in the questionState
        setQuestion({               //form returns to initial empty state after data is submitted
            questionText: '',
            answerOption1: '',
            answerOption2: '',
            answerOption3: '',
            answerOption4: '',
            correctAnswer: ''
        });
    }


    return (
        <form onSubmit={onSubmit}>
            <h2 className='text-primary'>Add Question</h2>
            
            <label htmlFor='questionText'>
                <span className='text-primary'>Question</span>
            <input
            type='text'          
            name='questionText'
            value={questionText} 
            onChange={onChange}
            />
            </label>

            <label htmlFor='answerOptions'> {/*This needs to be corrected gather all and put in an array? */}
            <span className='text-primary'>Answers Options</span>
            <input
            type='text'           
            name='answerOption1'
            value={answerOption1} 
            onChange={onChange}
            />
            <input
            type='text'
            
            name='answerOption2'
            value={answerOption2} 
            onChange={onChange}
            />
            <input
            type='text'
            
            name='answerOption3'
            value={answerOption3} 
            onChange={onChange}
            />
            <input
            type='text'
            
            name='answerOption4'
            value={answerOption4} 
            onChange={onChange}
            />
            </label>
            <label className='correctAnswer'>
            <span className='text-primary'>Correct Answer</span>   
            <input
            type='text'
            name='correctAnswer'
            value={correctAnswer} 
            onChange={onChange}
            />
            </label>
            <div type='submit' value='Add Question' className='btn btn-primary btn-block text-center' >
                Add Question
            </div> 
            
        </form>
    )
}

export default QuestionForm;
