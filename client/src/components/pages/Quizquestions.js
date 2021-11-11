import React, { useContext, useEffect } from 'react';
import Questions from '../questions/Questions';
import QuestionForm from '../questions/QuestionForm';
import AuthContext from '../../context/auth/authContext';


//Conditional rendering for the grid from 2 to 1
//remove the form if role is: basic or viewer and center questions if 

const Quizquestions = () => {
    const authContext = useContext(AuthContext);

    //Allows THIS PAGE TO BE A PRIVATE. token validated and user state now available
    useEffect(() => {  //useEffect because need to call loadUser when page loads
        authContext.loadUser(); // will look at the token, go to the backend validate it and put user into the state
        //eslint-disable-next-line 
    }, []);

        
    //const { user } = authContext;

    // if(user.role === 'admin'){
    //     display form
    // } else {
    //     display: none
    // }


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