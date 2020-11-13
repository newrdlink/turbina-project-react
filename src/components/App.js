import React, { useEffect } from 'react'
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import cn from 'classnames'

function App() {

  const [isBlurActive, setIsBlurActive] = React.useState(false)

  useEffect(() => {
  }, [isBlurActive]);

  function blurHandler(isScreenWide, isMediaOpen) {
    if (!isScreenWide && !isMediaOpen) {
      setIsBlurActive(true)
    } else {
      setIsBlurActive(false)
    }
  }

  return (
    <div className="root">
      <div className={cn("page", { "page-with-blur": isBlurActive })}>
        <Header blurHandler={blurHandler} />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
