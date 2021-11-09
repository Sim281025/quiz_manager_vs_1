import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Quizquestions from './components/pages/Quizquestions';
import Login from './components/auth/Login';
import { Link } from 'react-router-dom';
import QuestionState from './context/question/QuestionState';
import QuizState from './context/quiz/QuizState';


const App = () => {
  return (
    <div className="App">
      <QuizState>
        <QuestionState>
          <Router>
            <Fragment>
              <Navbar/>
                <div className='container'>
                  <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/quizquestions' component={Quizquestions}/>
                    <Route exact path='/login' component={Login}/>
                  </Switch>
              </div>
            </Fragment>
          </Router>
        </QuestionState>
      </QuizState>
    </div>
  );
}

export default App;
