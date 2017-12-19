import React from 'react';
import Navbar from './Navbar';
import PaintingContainer from './PaintingContainer';
import About from './About';
import Login from './Login';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar
        icon="paint brush"
        title="Painterest"
        description="web-100917 App"
      />
      <div id="content" className="ui container">
        {/* <PaintingNew /> */}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/paintings" component={PaintingContainer} />
          <Route path="/" component={About} />
        </Switch>
        {/* <PaintingContainer /> */}
        {/* <Login /> */}
      </div>
    </div>
  );
};

export default App;
