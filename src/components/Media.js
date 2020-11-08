import React from 'react'
import Player from './Player.js'

const Media = () => {

  return (
    <section className="media">
      <div className="media__player">
        <p className="media__current-track">I Have A Dream</p>
        <Player />
      </div>
      <button className="media__button-open"/>
      <button className="media__button-track media__button-track_opened">Текст песни</button>
    </section>
  )
}

export default Media;
