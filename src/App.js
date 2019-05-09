import React from 'react';
import { Container } from 'react-bootstrap';
import { Calculator } from './pages';
import { CalcNav } from './components';
import './App.css';

function App() {
  //basic layout. navbar on top and container. rows and columns are specified in pages.
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
