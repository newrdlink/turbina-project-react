import React from 'react'
import Audio from "../abba.mp3";
import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player'

function Header() {

  const Play = <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.3041 7.76283C15.232 8.34867 15.232 9.65133 14.3041 10.2372L2.40195 17.7525C1.37215 18.4027 -7.73515e-07
      17.696 -7.21907e-07 16.5153L-6.48979e-08 1.48469C-1.32898e-08 0.304034 1.37215 -0.402717 2.40195
      0.247521L14.3041 7.76283Z"
      fill="white"/>
  </svg>

  const Pause = <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="4" height="14" rx="1" fill="white"/>
    <rect x="8" width="4" height="14" rx="1" fill="white"/>
  </svg>

  const currentTimeHandler = (currentTime) => {
    const hours = Math.floor(currentTime / 60 / 60);
    const minutes = Math.floor(currentTime / 60) - (hours * 60);
    let seconds = Math.round(currentTime % 60)
    if (seconds < 10) seconds = '0' + seconds
    if (hours === 0) {
      document.querySelector('.player__current-time').innerHTML = `${minutes}:${seconds}`
    } else {
      document.querySelector('.player__current-time').innerHTML = `${hours}:${minutes}:${seconds}`
    }
  }

  return (
    <div className="header">
      <h1 className="header__title">ABBA : I Have A Dream</h1>

      <div className="player">
        <div className="play-pause-button"/>
        <div className="player__current-time">0:00</div>
        <AudioPlayer
          customProgressBarSection={
            [
              RHAP_UI.PROGRESS_BAR,
            ]
          }
          layout="horizontal-reverse"
          showDownloadProgress={false}
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          customLoopControls={[]}
          src={Audio}
          onListen={currentTime => currentTimeHandler(currentTime.target.currentTime)}
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
