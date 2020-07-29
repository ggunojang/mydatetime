import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import RealTime from './components/Realtime';
import Background from './components/Background';
import Weather from './components/Weather';
import {MyContext} from './api/MyContext';
import './App.css';


function App() {
  const [store, setStore] = useState({backgroundKeyword: ''});
  return (
    <MyContext.Provider value={{store, setStore}}>
      <Container fluid>
        <Weather />
        <RealTime />
        <Background />
      </Container>
    </MyContext.Provider>
  );
  
}

export default App;
