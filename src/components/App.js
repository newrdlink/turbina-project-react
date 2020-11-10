import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import cn from 'classnames'


function App() {
  const [isBlurActive, setIsBlurActive] = React.useState(false)
  React.useEffect(() => {
    console.log('isBlurActive', isBlurActive)
  }, [isBlurActive]);


  function isBlur(isScreenWide, isMediaOpen) {
    console.log({isScreenWide, isMediaOpen})
    // console.log(isMediaOpen)
    if (!isScreenWide && isMediaOpen) {
      setIsBlurActive(false)
      console.log('isBlurActive', isBlurActive)
    } else {
      setIsBlurActive(true)
      console.log('isBlurActive', isBlurActive)
    }
  }

  return (<div className="App root">
    {/*<div className={cn("page", {"page-with-blur" : isBlurActive})}>*/}
    <div className={"page"}>
      <Header isBlur={isBlur}/>
      <Main/>
      <Footer/>
    </div>
  </div>);
}

export default App;
