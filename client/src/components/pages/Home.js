import React, {useEffect, useContext} from 'react';
import Quizzes from '../quizzes/Quizzes';
import QuizFilter from '../quizzes/QuizFilter';
import { Link } from 'react-router-dom';
import QuizAdd from '../quizzes/QuizAdd';
import QuizInfo from '../quizzes/QuizInfo';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
    const authContext = useContext(AuthContext);

    //Allows THIS PAGE TO BE A PRIVATE. token validated and user state now available
    useEffect(() => {  //useEffect because need to call loadUser when page loads
        authContext.loadUser(); // will look at the token, go to the backend validate it and put user into the state
        //eslint-disable-next-line 
    }, []);


    //conditional render for quiz add

    return (
        <div className="page">
        <div className="grid-2">
            <div>
                <QuizInfo />
            </div>
            
            <div>
                <div id="search">
                   <QuizFilter />
                </div>
                <div id="addQuiz" style={{padding:'10%'}}>
                    <QuizAdd />
                </div>
            </div> 

        </div>
        <div>
            <Quizzes />
        </div>
        </div>
    )
}

export default Home;
