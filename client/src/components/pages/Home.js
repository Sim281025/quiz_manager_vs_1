import React from 'react';
import Quizzes from '../quizzes/Quizzes';
import QuizFilter from '../quizzes/QuizFilter';
import { Link } from 'react-router-dom';
import QuizAdd from '../quizzes/QuizAdd';
import QuizInfo from '../quizzes/QuizInfo';

const Home = () => {
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
