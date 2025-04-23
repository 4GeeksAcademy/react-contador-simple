import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Reloj from './components/Reloj';

let root = ReactDOM.createRoot(document.getElementById('root'));


let contador = 0;

setInterval(() => {
  console.log('intervalo');

  const cuatro = Math.floor(contador / 1000);
  const tres = Math.floor(contador / 100);
  const dos = Math.floor(contador / 10);
  const uno = Math.floor(contador / 1);

  contador++;

  root.render(
    <Reloj numeroUno={uno} numeroDos={dos} numeroTres={tres} numeroCuatro={cuatro}/>
  );
}, 1000);
