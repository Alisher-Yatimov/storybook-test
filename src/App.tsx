import React from 'react';
import { InputButton } from './components/InputButton';
import { Header } from './components/Header';
import { TogglerMode } from './components/TogglerMode';
import './App.css';

function App() {
  const submitHandler = (msg: string) => {
    alert(msg);
  }
  return (
    <>
      <Header headerJustify="space-between" headerAlign="center" navJustify="space-around"/>
      <InputButton submitHandler={submitHandler}/>
      <TogglerMode modes={['first', 'second', 'third']} btnText="change mode"/>
    </>
  );
}

export default App;
