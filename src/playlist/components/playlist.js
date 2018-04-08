import React from 'react'
import Media from './media'
import './playlist.css'
import Play from '../../icons/components/play'

function PlayList(props) {
    const playlist = props.data.categories[0].playlist
    console.log(props.data)
    return (
        <div className="Playlist">
        <Play
        size={50}
        color="red"
        />
            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id} />
                })
            }
        </div>
    )
}

export default PlayList