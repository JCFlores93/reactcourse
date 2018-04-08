import React, { Component } from 'react'
import './video.css'

class Video extends Component {
    render() {
        return (
            <video
                autoPlay={ this.props.autoplay}
                src={this.props.src}
            />
        )
    }
}

export default Video