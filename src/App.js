import React from 'react';
import { Container } from 'react-bootstrap';
import { Calculator } from './pages';
import { CalcNav } from './components';
import './App.css';

function App() {
  return (
    <>
      <CalcNav />
      <Container>
        <Calculator />
      </Container>
    </>
  );
}

export default App;
