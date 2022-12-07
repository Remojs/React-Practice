import React from 'react'
import './App.css';
import Componente from './components/Componente';
import Nabv from './layout/Nabv';


function App() {
  return (
    <div className="App">
      <Nabv />
      <hr />
      <Componente msg= 'hola soy una prop'/>
      <hr />
    </div>
  );
}

export default App;
