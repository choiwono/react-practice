import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "리액트수였습니다 짜짠";
  return (
      <div>
        { name === "리액트" ? ( <h1>리액트입니다.</h1> ) : ( <h2>리액트 아닙니다.</h2> ) }
      </div>
  );
}

export default App;
