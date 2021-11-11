import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Quizquestions from './components/pages/Quizquestions';
//import Register from './components/auth/Register';
import Login from './components/auth/Login';
//import { Link } from 'react-router-dom';
import Alerts from './components/layout/Alerts';


import QuestionState from './context/question/QuestionState';
import QuizState from './context/quiz/QuizState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';

import Register from './components/auth/Register';
import setAuthToken from './utils/setAuthToken';

import PrivateRoute from './components/routing/PrivateRoute'

if(localStorage.token) {
  setAuthToken(localStorage.token) //setAuthToken is a global header found in utils
}

const App = () => {
  return (
    <div className="App">
      <AuthState>
        <QuizState>
          <QuestionState>
            <AlertState>
              <Router>
                <Fragment>
                  <Navbar/>
                    <div className='container'>
                      <Alerts/>
                      <Switch>
                        <PrivateRoute exact path='/' component={Home}/>
                        <PrivateRoute exact path='/quizquestions' component={Quizquestions}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/register' component={Register}/>
                      </Switch>
                    </div>
                </Fragment>
              </Router>
            </AlertState>
          </QuestionState>
        </QuizState>
      </AuthState>
    </div>
  );
}

export default App;
