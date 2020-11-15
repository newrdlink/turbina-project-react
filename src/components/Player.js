import AudioPlayer, {RHAP_UI} from 'react-h5-audio-player'
import React from "react";
import playlist from "../utils/playlist";
import cn from 'classnames';
import {PlayButton, PauseButton} from './ControlElements.js';
import {timeFormat} from '../utils/timeFormat.js';

function Player(props) {

  return (
    <div className={cn("player", {'player_direction_up': props.isOpen})}>
      <div className={cn("player__current-time", {"player__current-time_direction_up": props.isOpen})}>0:00</div>
      <p
        className={cn("media__current-track", {"media__current-track_direction_up":
          props.isOpen})}>{playlist[props.currentTrack].artist}. {playlist[props.currentTrack].title}. {playlist[props.currentTrack].lyrics}</p>
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
        onListen={currentTime => timeFormat(currentTime.target.currentTime)}
        customIcons={{
          play: <PlayButton isScreenWide={props.isScreenWide}/>,
          pause: <PauseButton isScreenWide={props.isScreenWide}/>
        }}
      />
    </div>
  )
}

export default Player
