import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0
    }

    tooglePlay = () => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })

    }

    handleTimeUpdate = evente => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    render() {
        return (
            <VideoPlayerLayout>
                <Title
                    title="Esto es un video chido"
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.tooglePlay}
                    />
                    <Timer
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                </Controls>
                <Video
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoplay={this.props.autoplay}
                    handleTimeUpdate={this.handleTimeUpdate}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer