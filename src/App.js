import React from 'react';
import Navbar from './Navbar';
import PaintingList from './PaintingList';
import Counter from './Counter';

const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />
      <Counter />
      <PaintingList />
    </div>
  );
};

export default App;
