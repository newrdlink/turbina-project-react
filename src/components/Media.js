import React from 'react'
import Player from './Player.js'
import MediaContent from './MediaContent.js'

const Media = () => {

  // эту функцию надо будет переделать
  const testFunctions = () => {
    document.querySelector(".rhap_progress-bar").classList.toggle('rhap_progress-bar_opened');
    document.querySelector(".media__button-track").classList.toggle('media__button-track_opened');
  }

  return (<section className="media">
    <div className="media__player">
      <p className="media__current-track">I Have A Dream</p>
      <Player/>
    </div>
    <button className="media__button-open" onClick={testFunctions}/>
    <MediaContent/>
  </section>)
}

export default Media;
