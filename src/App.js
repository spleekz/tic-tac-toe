import React from 'react';
import Header from './components/Header/Header';
import ChoiseContainer from './components/Сhoice/ChoiseContainer';
import './App.css'

const App = (props) => {
  return (
    <div className='app'>
      <Header />
      <ChoiseContainer />
    </div>
  );
};

export default App;
