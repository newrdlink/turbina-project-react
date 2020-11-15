export function PlayButton(props) {
  if (props.isScreenWide) {
    return <svg width="15" height="18" viewBox="0 0 15 18" fill="none" >
      <path
        d="M14.3041 7.76283C15.232 8.34867 15.232 9.65133 14.3041 10.2372L2.40195 17.7525C1.37215 18.4027 -7.73515e-07
      17.696 -7.21907e-07 16.5153L-6.48979e-08 1.48469C-1.32898e-08 0.304034 1.37215 -0.402717 2.40195
      0.247521L14.3041 7.76283Z"
        fill="white" />
    </svg>
  } else {
    return <svg width="13" height="16" viewBox="0 0 13 16" fill="none" >
      <path d="M12.3969 6.90029C13.201 7.42104 13.201 8.57896 12.3969 9.09971L2.08169 15.78C1.1892 16.358
      2.66105e-07 15.7297 3.11979e-07 14.6803L8.95987e-07 1.31973C9.41861e-07 0.270253 1.1892 -0.357971
      2.08169 0.220019L12.3969 6.90029Z"
            fill="white" />
    </svg>
  }
}

export function PauseButton(props) {
  if (props.isScreenWide) {
    return <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
      <rect width="4" height="14" rx="1" fill="white"/>
      <rect x="8" width="4" height="14" rx="1" fill="white"/>
    </svg>
  } else {
    return <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
      <rect width="4" height="12" rx="1" fill="white"/>
      <rect x="7" width="4" height="12" rx="1" fill="white"/>
    </svg>
  }
}
