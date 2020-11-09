import React from 'react'
import Player from './Player.js'
import MediaContent from './MediaContent.js'
import playlist from '../utils/playlist.js'

const Media = () => {

  const [isLyricOpen, setIsLyricOpen] = React.useState(true)
  const contentTypeHandler = () => isLyricOpen ? setIsLyricOpen(false) : setIsLyricOpen(true)

  const [isMediaOpen, setIsMediaOpen] = React.useState(false)
  const mediaContentVisibilityHandler = () => isMediaOpen ? setIsMediaOpen(false) : setIsMediaOpen(true)




  // эту функцию надо будет переделать
  const mediaContentVisibilityHandler2 = () => {
    document.querySelector(".rhap_progress-bar").classList.toggle('rhap_progress-bar_opened');
    document.querySelector(".media__button-track").classList.toggle('media__button-track_opened');
    document.querySelector(".media__content").classList.toggle('media__content_opened')
    document.querySelector(".media__button-open").classList.toggle('media__button-open_active')
  }

  return (
    <section className="media">
      <Player playlist={playlist} isOpen={isMediaOpen}/>
      <div className="media__controls">

        <div className="media__player">
          <p className="media__current-track">{playlist["0"].artist}. {playlist["0"].title}. {playlist["0"].lyrics}</p>

        </div>
        <button className="media__button-open" onClick={mediaContentVisibilityHandler}/>
        <button className="media__button-track" onClick={contentTypeHandler}>{ isLyricOpen ? "Текст песни" : "Релизы" }</button>
      </div>
      <div className="media__content">
        <MediaContent playlist={playlist} isLyricOpen={isLyricOpen} />
      </div>
    </section>
  )
}

export default Media;
