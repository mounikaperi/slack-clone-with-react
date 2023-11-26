// AppRouter.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login'; 
import SignInWithEmail from '../components/SignInWithEmail'

const LoginRouter = () => {
  const [email, setEmail] = useState('');
  return (
    <Router>
      <Switch>
        <Route path="/" exact
          render={(props) => (
            <Login {...props} email={email} setEmail={setEmail} />
          )}
        />
        <Route
          path="/SignInWithEmail"
          render={(props) => (
            <SignInWithEmail {...props} email={email} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
