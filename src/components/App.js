import React from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import cn from 'classnames'

function App() {

  const [isBlurActive, setIsBlurActive] = React.useState(false)

  function blurHandler(isScreenWide, isMediaOpen) {
    if (!isScreenWide && !isMediaOpen) {
      setIsBlurActive(true)
    } else {
      setIsBlurActive(false)
    }
  }

  return (
    <div className="root">
      <div className={cn("page", { "page_blur": isBlurActive })}>
        <Header blurHandler={blurHandler} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
