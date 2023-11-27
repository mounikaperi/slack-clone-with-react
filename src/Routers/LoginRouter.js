// AppRouter.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import SignInWithConfirmationCode from '../components/Login/SignInWithConfirmationCode'
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
          path="/sign-in-with-code"
          render={(props) => (
            <SignInWithConfirmationCode {...props} sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />
        <Route
          path="/enter-workspace"
          render={(props) => (
            <WorkspaceSignIn {...props} sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />
        <Route
          path="/create-new-workspace"
          render={(props) => (
            <WorkspaceSignIn {...props} sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />
        <Route
          path="/sign-in-with-email-password"
          render={(props) => (
            <WorkspaceSignIn {...props} sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />
        <Route
          path="/forgot-password"
          render={(props) => (
            <WorkspaceSignIn {...props} sharedData={sharedData} setSharedData={setSharedData} />
          )}
        />
      </Switch>
    </Router>
  );
};

export default LoginRouter;
