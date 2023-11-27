// AppRouter.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignInWithEmail from '../components/Login/SignInWithEmail'

const LoginRouter = () => {
  const [sharedData, setSharedData] = useState({
    email: "",
    confirmationCode: ""
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact
          render={(props) => (
            <Login sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />
        <Route
          path="/SignInWithEmail"
          render={(props) => (
            <SignInWithEmail {...props} sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />

      </Switch>
    </Router>
  );
};

export default LoginRouter;
