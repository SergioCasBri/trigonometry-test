import React from 'react';
import "./Inicio.css";
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Portada from '../assets/portada.jpg';
import Triangulo from '../assets/triangulo.jpg';
import Seno from '../assets/formulaSeno.png';
import Coseno from '../assets/formulaCoseno.png';
import Tangente from '../assets/formulaTangente.png';
import Cotangente from '../assets/formulaCotangente.png';
import Secante from '../assets/formulaSecante.png';
import Cosecante from '../assets/formulaCosecante.png';
import graficaSeno from '../assets/graficaSeno.png';
import graficaCoseno from '../assets/graficaCoseno.png';
import graficaTangente from '../assets/graficaTangente.png';
import graficaCotangente from '../assets/graficaCotangente.png';
import graficaSecante from '../assets/graficaSecante.png';
import graficaCosecante from '../assets/graficaCosecante.png';



function Inicio() {

    const handleChange = (event) =>{
      imagenFuncion(event.target.value);
      imagenTriangulo (event.target.value);
      textoFuncion (event.target.value);
    }

    const [imagen, setImagen] = useState (Portada);
    const [imagen2, setImagen2] = useState (Triangulo);
    const [texto, setTexto] = useState ("")


    const imagenFuncion = (funcion) => {
        funcion === 0 ? setImagen (Portada):
        funcion === 10 ? setImagen (Seno):
        funcion === 20 ? setImagen (Coseno):
        funcion === 30 ? setImagen (Tangente):
        funcion === 40 ? setImagen (Cotangente):
        funcion === 50 ? setImagen (Secante):
        funcion === 60 && setImagen (Cosecante)
    }

    const imagenTriangulo = (ima2) => {
        ima2 === 0 ? setImagen2 (""):
        ima2 === 10 ? setImagen2 (graficaSeno):
        ima2 === 20 ? setImagen2 (graficaCoseno):
        ima2 === 30 ? setImagen2 (graficaTangente):
        ima2 === 40 ? setImagen2 (graficaCotangente):
        ima2 === 50 ? setImagen2  (graficaSecante):
        ima2 === 60 && setImagen2 (graficaCosecante)
    }

    const textoFuncion = (funcion) => {
      funcion === 0 ? setTexto (""):
      funcion === 10 ? setTexto (Triangulo):
      funcion === 20 ? setTexto (Triangulo):
      funcion === 30 ? setTexto (Triangulo):
      funcion === 40 ? setTexto (Triangulo):
      funcion === 50 ? setTexto (Triangulo):
      funcion === 60 && setTexto (Triangulo)
  }

  return (
    <div className='home-container'>
        <h1 className= 'titulo'>calculadora de funciones trigonometricas</h1>
        <section className='imagenes'>
            <img className='primeraimg' src={imagen} alt= "" />
            <img clasName= 'segundaimg' src={imagen2} alt= "" />
            <img className='terceraimg' src={texto} alt= ""/>
        </section>
        <section>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Función</InputLabel>
        <Select
          onChange={handleChange}
          defaultValue= {0}
        >
          <MenuItem value={0}>
            <em>Selecciona función</em>
          </MenuItem>
          <MenuItem value={10}>Seno</MenuItem>
          <MenuItem value={20}>Coseno</MenuItem>
          <MenuItem value={30}>Tengente</MenuItem>
          <MenuItem value={40}>Cotangente</MenuItem>
          <MenuItem value={50}>Secante</MenuItem>
          <MenuItem value={60}>Cosecante</MenuItem>
        </Select>
      </FormControl>
        </section>
    </div>
  )
}

export default Inicio;
