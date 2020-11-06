import React from 'react'
import Player from './Player.js'

function Header() {

  return (
    <div className="header">
      <h1 className="header__title">ABBA</h1>
      <section className="media">
        <div className="media__player">
          <p className="media__current-track">I Have A Dream</p>
          <Player/>
        </div>
        <ul className="media__playlist">
          <li className="media__playlist-track">Test song # 1 of 7 from my playlist</li>
          <li className="media__playlist-track">Test song # 2 of 7 from my playlist</li>
          <li className="media__playlist-track">Test song # 3 of 7 from my playlist</li>
          <li className="media__playlist-track">Test song # 4 of 7 from my playlist</li>
          <li className="media__playlist-track">Test song # 5 of 7 from my playlist</li>
          <li className="media__playlist-track">Test song # 6 of 7 from my playlist</li>
          <li className="media__playlist-track">Test song # 7 of 7 from my playlist</li>
        </ul>
      </section>
    </div>
  )
}

export default Header;
