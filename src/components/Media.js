import React from 'react'
import Player from './Player.js'
import MediaContent from './MediaContent.js'
import playlist from '../utils/playlist.js'
import cn from 'classnames'

const Media = () => {
  let currentTrack = 1

  const [isLyricOpen, setIsLyricOpen] = React.useState(true)
  const contentTypeHandler = () => isLyricOpen ? setIsLyricOpen(false) : setIsLyricOpen(true)

  const [isMediaOpen, setIsMediaOpen] = React.useState(false)
  const mediaContentVisibilityHandler = () => {
    isMediaOpen ? setIsMediaOpen(false) : setIsMediaOpen(true)
    detectVideo(currentTrack)
  }

  const [isVideo, setIsVideo] = React.useState(false)

  function detectVideo(currentTrack) {
    playlist[currentTrack].banner ? setIsVideo(true) : setIsVideo(false)
  }

  return (
    <section className="media">
      <Player playlist={playlist} isOpen={isMediaOpen}/>
      <div className="media__track-video">
        <button className={cn("media__button-video", {"media__button-video_opened": isMediaOpen && isVideo})}>Клип</button>
        <button className={cn("media__button-track", {"media__button-track_opened": isMediaOpen})}
                onClick={contentTypeHandler}>{isLyricOpen ? "Текст песни" : "Релизы"}</button>
      </div>
      <button className={cn("media__button-open", {"media__button-open_active": isMediaOpen})}
              onClick={mediaContentVisibilityHandler}/>
      <div className={cn("media__content", {"media__content_opened": isMediaOpen})}>
        <MediaContent playlist={playlist} isLyricOpen={isLyricOpen}/>
      </div>
      <img src={playlist[currentTrack].banner}
           className={cn("media__banner", {"media__banner_opened": isMediaOpen && isVideo})}
           alt={playlist[currentTrack].title}/>
    </section>
  )
}

export default Media;
