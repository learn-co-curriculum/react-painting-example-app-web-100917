import React from 'react';
import Navbar from './Navbar';
import PaintingContainer from './PaintingContainer';
import PaintingNew from './PaintingNew';
import About from './About';
import Login from './Login';

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
        {/* <About /> */}
        <Login />
        {/* <PaintingContainer /> */}
      </div>
    </div>
  );
};

export default App;
