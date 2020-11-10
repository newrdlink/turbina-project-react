import React from 'react'

function Song(props) {
  function handleClickTrack() {
    props.onTrackClick(props)
  }
  return (<li className="media__content-playlist-item" onClick={handleClickTrack.bind(props)}>{props.title}. {props.artist}</li>)
}

export default Song
