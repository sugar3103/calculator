import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './component/body';

function App() {
  const [result, setResult] = useState(0);
  const setNumber = (e) => {
    e.preventDefault();
  }
  return (
    <Body result={result} setNumber={setNumber}/>
  );
}

export default App;
