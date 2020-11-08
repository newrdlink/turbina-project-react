import React from 'react'
import Player from './Player.js'
import MediaContent from './MediaContent.js'
import playlist from '../utils/playlist.js'

const Media = () => {

  let isLyric = true
  // эту функцию надо будет переделать
  const mediaContentVisibilityHandler = () => {
    document.querySelector(".rhap_progress-bar").classList.toggle('rhap_progress-bar_opened');
    document.querySelector(".media__button-track").classList.toggle('media__button-track_opened');
    document.querySelector(".media__content").classList.toggle('media__content_opened')
  }



  const contentTypeHandler = () => {
    console.log('contentTypeHandler')
    if (document.querySelector(".media__button-track").innerHTML === "Текст песни") {
      document.querySelector(".media__button-track").innerHTML = "Релизы"
      isLyric = false;
    } else {
      document.querySelector(".media__button-track").innerHTML = "Текст песни"
      isLyric = true;
    }
  }

  return (
    <section className="media">
      <div className="media__controls">
        <div className="media__player">
          <p className="media__current-track">{playlist["0"].artist}. {playlist["0"].title}. {playlist["0"].lyrics}</p>
          <Player playlist={playlist}/>
        </div>
        <button className="media__button-open" onClick={mediaContentVisibilityHandler}/>
        <button className="media__button-track" onClick={contentTypeHandler}>Текст песни</button>
      </div>
      <div className="media__content">
        <MediaContent playlist={playlist} isLyric={isLyric} />
      </div>
    </section>
  )
}

export default Media;
