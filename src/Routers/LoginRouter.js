// AppRouter.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignInWithEmail from '../components/Login/SignInWithEmail'
import WorkspaceSignIn from '../components/Login/WorkspaceSignIn';

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
        <Route
          path="/workspace-signin"
          render={(props) => (
            <WorkspaceSignIn {...props} sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
