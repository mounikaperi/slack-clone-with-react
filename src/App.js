import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route exact path="/channels/:channelId"><Chat /></Route>
            <Route exact path="/">Welcome Screen</Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
