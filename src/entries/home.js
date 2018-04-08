import React from 'react'
import { render } from 'react-dom'
//import Media from './src/playlist/components/media'
import Home from '../pages/containers/home'
//import PlayList from '../playlist/components/playlist'
//import PlayList from './src/playlist/components/playlist'
import data from '../api.json'


const homeContainer = document.getElementById('home-container')
//const holaMundo = <h1>Hola mundo!!!</h1>
//render(<Media title="¿Qué es responsive design" author="Jean Carlo Flores" image="./img/responsive.jpg" type="video"/>, app)
//render(<PlayList data={data}/>, app)
render(<Home data={ data }/>, homeContainer)
console.log("Hello world")