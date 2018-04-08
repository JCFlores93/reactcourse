import React, { Component } from 'react'
import './video.css'

class Video extends Component {

    tooglePlay() {
        if(this.props.pause) {
            //métodos nativos del navegador
            this.video.play()
        }else {
            //métodos nativos del navegador
            this.video.pause()
        }
        
    }

    setRef = element => {
        this.video = element
    }

    componentWillReceiveProps(nextprops) {
        if(nextprops.pause !== this.props.pause) {
            this.tooglePlay()
        }
    }
    render() {
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props

        return (
            <video
                autoPlay={ this.props.autoplay}
                src={this.props.src}
                ref={this.setRef}
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onSeeking={handleSeeking}
                onSeeked={handleSeeked}
            />
        )
    }
}

export default Video