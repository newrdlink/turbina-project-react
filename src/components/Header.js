import React from 'react'
import Media from './Media.js'
import logo from "../images/header-logo.svg";
import mainBanner from "../images/turbina.svg";
import Resource from "./Resource";
import resources from "../utils/resources";
import cn from 'classnames'

function Header(props) {

  const [isStreamingOpen, setIsStreamingOpen] = React.useState(false)
  const handleClickStreaming = () => {
    isStreamingOpen ? setIsStreamingOpen(false) : setIsStreamingOpen(true)
  }
  const handleClickCloseButton = () => {
    isStreamingOpen ? setIsStreamingOpen(false) : setIsStreamingOpen(true)
  }

  return (<header className="header">
    <a href="#" target="_blank" rel="noopener" className="header__link">
      <img src={logo} alt="логотип" className="header__logo"/>
    </a>
    <div className="menu">
      <button type="button" aria-label="list"
              className={cn("menu__button menu__open-streaming", {"menu__button_invisible": isStreamingOpen})}
              onClick={handleClickStreaming}>Стриминги
      </button>
      <button type="button" aria-label="list"
              className={cn("menu__button menu__close-button", {"menu__button_invisible": !isStreamingOpen})}
              onClick={handleClickCloseButton}/>
      <ul className="menu__resources">
        {resources.map((resource, i) => <Resource key={i} resource={resource} isStreamingOpen={isStreamingOpen}/>)}
      </ul>
    </div>
    <section className="banner">
      <h1 className="banner__title"><img className="banner__img" src={mainBanner} alt="баннер"/></h1>
    </section>
    <Media blurHandler={props.blurHandler}/>
  </header>)
}

export default Header
