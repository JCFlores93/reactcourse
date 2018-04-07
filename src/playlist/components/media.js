import React, { Component } from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends Component {

    /*constructor(props) {
        super(props)
        //Ahora está enlazado con el componente
        this.handleClick = this.handleClick.bind(this)
    }*/

    handleClick = (event) => {
        event.preventDefault()
        console.log(event)
        console.log(this.props.title)
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
                    <p className="Media-author">{this.props.author}</p>
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