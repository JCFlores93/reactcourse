import React, { Component } from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends Component {

    //Manejando estados para cambiar una variable
    state = {
        author: 'Jean Carlo Flores Carrasco'
    }

    //constructor(props) {
        //super(props)
        //Ahora está enlazado con el componente
        //this.handleClick = this.handleClick.bind(this)

        //Manejando estados para cambiar una variable
        /*this.state = {
            author: props.author
        }*/
    //}

    handleClick = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(this.props.title)
        //modificar un estado del componente
        this.setState({
            author: 'Ricardo Celis'
        })
    }

    render() {
        const styles = {
            container: {
                color: 'red',
                cursor: 'pointer',
                border: '1px solid red',
                width: 260
            }
        }
        //UI
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img src={this.props.image}
                        alt=""
                        width={260}
                        height={160}
                        className="Media-image"
                    />
                    <p>Hola Mundo desde media.js</p>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    type: PropTypes.oneOf(['video', 'audio'])
    //si es para array
    /*
    .array
    .number
    .func
    .object
    */
}
export default Media