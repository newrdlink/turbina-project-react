import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player'
import React from "react";
import playlist from "../utils/playlist";
import cn from 'classnames';


function Player(props) {

  function getPlayIcon() {
    if (props.isScreenWide) {
      return <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.3041 7.76283C15.232 8.34867 15.232 9.65133 14.3041 10.2372L2.40195 17.7525C1.37215 18.4027 -7.73515e-07
      17.696 -7.21907e-07 16.5153L-6.48979e-08 1.48469C-1.32898e-08 0.304034 1.37215 -0.402717 2.40195
      0.247521L14.3041 7.76283Z"
          fill="white"/>
      </svg>
    } else {
      return <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3969 6.90029C13.201 7.42104 13.201 8.57896 12.3969 9.09971L2.08169 15.78C1.1892 16.358
      2.66105e-07 15.7297 3.11979e-07 14.6803L8.95987e-07 1.31973C9.41861e-07 0.270253 1.1892 -0.357971
      2.08169 0.220019L12.3969 6.90029Z"
              fill="white"/>
      </svg>
    }
  }

  function getPauseIcon() {
    if (props.isScreenWide) {
      return <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="4" height="14" rx="1" fill="white"/>
        <rect x="8" width="4" height="14" rx="1" fill="white"/>
      </svg>
    } else {
      return <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="4" height="12" rx="1" fill="white"/>
        <rect x="7" width="4" height="12" rx="1" fill="white"/>
      </svg>
    }
  }

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
    <div className={cn("player", {'player_direction_up' : props.isOpen})}>
      <div className={cn("player__current-time", {"player__current-time_direction_up" : props.isOpen})}>0:00</div>
      <p className={cn("media__current-track", {"media__current-track_direction_up" : props.isOpen})}>{playlist[props.currentTrack].artist}. {playlist[props.currentTrack].title}. {playlist[props.currentTrack].lyrics}</p>
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
        src={props.playlist[props.currentTrack].src}
        onListen={currentTime => currentTimeHandler(currentTime.target.currentTime)}
        customIcons={{
          play: getPlayIcon(),
          pause: getPauseIcon()
        }}
      />
    </div>
  )
}

export default Player
