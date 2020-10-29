import React from 'react'
import {HelloWorld} from './components/HelloWorld';
import {HelloWorld2} from './components/HelloWorld2';
import './App.css';

function App() {
  return (
    <div className="App">
        <HelloWorld name="Joe"/>
        <HelloWorld2 name="Joe"/>
    </div>
  );
}

export default App;
