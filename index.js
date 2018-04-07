import React from 'react'
import { render } from 'react-dom'
import Media from './src/playlist/components/media'


const app = document.getElementById('app')
//const holaMundo = <h1>Hola mundo!!!</h1>
render(<Media title="¿Qué es responsive design" author="Jean Carlo Flores" image="./img/responsive.jpg" type="video"/>, app)
console.log("Hello world")