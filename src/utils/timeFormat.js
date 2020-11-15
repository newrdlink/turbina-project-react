export const timeFormat = (currentTime) => {
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
