import React from 'react'
import Song from "./Song";

function MediaContent(props) {
  if (props.isLyricOpen) {
    return (
      <div className="media__content-text">
        <p className="media__content-text">Текст песни:</p>
        {props.playlist[props.currentTrack].lyrics_text}
      </div>
    )
  } else {
    if (props.playlist.length > 1) {
      return (
        <>
          <p className="media__content-text">Релизы:</p>
          <ul className="media__content-playlist">
            {props.playlist.map((song) => <Song key={song.track_id} {...song} onTrackClick={props.onTrackClick} />)}
          </ul>
        </>)
    } else {
      return (
        <p className="media__content-text media__content-text_typo">Пока что у нас только 1 релиз.</p>
      )
    }
  }
}

export default MediaContent
