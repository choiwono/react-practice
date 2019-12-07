import React from 'react';
import Counter from '../src/components/Counter';
import Todos from '../src/components/Todos';
import './App.css';

const App = () => {
  return (
    <div>
      <Counter number={0}/>
      <hr/>
      <Todos/>
    </div>
  )
}

export default App;
