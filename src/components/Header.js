import React from 'react'
import Audio from "../abba.mp3";
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player'

function Header() {

  const Play = <svg width="20" height="26" viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18.47 11.3307C19.668 12.1211 19.668 13.8789 18.47 14.6693L3.10149 24.81C1.77177 25.6873 6.9507e-07 24.7337
      7.64706e-07 23.1406L1.65123e-06 2.85939C1.72086e-06 1.2663 1.77177 0.312659 3.10149 1.19004L18.47 11.3307Z"
      fill="white"/>
  </svg>

  const Pause = <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
          d="M1 0C0.447266 0 0 0.447266 0 1V17C0 17.5527 0.447266 18 1 18H3C3.55273 18 4 17.5527 4 17V1C4 0.447266
          3.55273 0 3 0H1ZM11 0C10.4473 0 10 0.447266 10 1V17C10 17.5527 10.4473 18 11 18H13C13.5527 18 14 17.5527
          14 17V1C14 0.447266 13.5527 0 13 0H11Z"
          fill="white"/>
  </svg>

  const currentTimeHandler = () => {
    const timeElement = document.querySelector('.rhap_time').innerHTML
    console.log(timeElement)
  }

  return (
    <div className="header">
      <h1 className="header__title">ABBA : I Have A Dream</h1>
      <div className="player">
        <div className="play-pause-button"/>
        <AudioPlayer
          customProgressBarSection={
            [
              RHAP_UI.PROGRESS_BAR,
              RHAP_UI.CURRENT_TIME,
            ]
          }
          layout="horizontal-reverse"
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          customLoopControls={[]}
          src={Audio}
          onListen={currentTime => currentTimeHandler()}
          style={{width: '100%'}}
          customIcons={{
            play: Play,
            pause: Pause
          }}
        />
      </div>
    </div>
  )
}

export default Header;
