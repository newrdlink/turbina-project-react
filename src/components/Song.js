import React from 'react'

function Song(props) {
  return (<li className="media__content-playlist-item">{props.title}. {props.artist}</li>)
}

export default Song
