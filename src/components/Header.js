import React from 'react'
import Audio from "../abba.mp3";
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player'

function Header() {

  const currentTimeHandler = () => {
    const timeElement = document.querySelector('.rhap_time').innerHTML
    console.log(timeElement)
  }

  const showPauseButton = () => {
    document.querySelector('.rhap_play-pause-button').classList.add('rhap_play-pause-button_pause')
  }

  const showPlayButton = () => {
    document.querySelector('.rhap_play-pause-button').classList.remove('rhap_play-pause-button_pause')
  }

  return (
    <div className="header">
      <h1 className="header__title">ABBA : I Have A Dream</h1>
      <div className="player">
        <div className="play-pause-button"/>
        <AudioPlayer
          autoPlay
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
          onPlay={e => showPauseButton()}
          onPause={e => showPlayButton()}
        />
      </div>
    </div>
  )
}

export default Header;
