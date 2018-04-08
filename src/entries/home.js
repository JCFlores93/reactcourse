import React from 'react'
import { render } from 'react-dom'
//import Media from './src/playlist/components/media'
import Home from '../pages/containers/home'
import PlayList from '../playlist/components/playlist'
//import PlayList from './src/playlist/components/playlist'
//import data from './src/api.json'


const app = document.getElementById('app')
//const holaMundo = <h1>Hola mundo!!!</h1>
//render(<Media title="¿Qué es responsive design" author="Jean Carlo Flores" image="./img/responsive.jpg" type="video"/>, app)
//render(<PlayList data={data}/>, app)
render(<Home/>, app)
console.log("Hello world")