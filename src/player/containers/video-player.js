import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import ProgressBar from '../components/progressbar-bar'
import Spinner from '../components/spinner'

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false
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

    handleSeeked = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeking = event => {
        this.setState({
            loading: false
        })
    }

    handleTimeUpdate = evente => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
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
                    <ProgressBar
                        duration={this.state.duration}
                        value={this.state.currentTime}
                        handleProgressChange={this.handleProgressChange}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoplay={this.props.autoplay}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer