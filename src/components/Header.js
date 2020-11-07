import React from 'react'
import Media from './Media.js'
import logo from "../images/header-logo.svg";
import mainBanner from "../images/turbina.svg";

function Header() {
  return (<header className="header">
    <a href="#" target="_blank" rel="noopener" className="header__link">
      <img src={logo} alt="логотип" className="header__logo"/>
    </a>
    <ul className="menu__resources">
      <button type="button" aria-label="list" className="menu__button menu__open-streamings">Стриминги</button>
      <button type="button" aria-label="list"
              className="menu__button menu__close-button menu__button_invisible"/>
      <li className="menu__resource">
        <a href="#" target="_blank" rel="noopener" className="menu__resource-link">Яндекс.Музыка ↗</a>
      </li>
      <li className="menu__resource">
        <a href="#" target="_blank" rel="noopener" className="menu__resource-link">Spotify ↗</a>
      </li>
      <li className="menu__resource">
        <a href="#" target="_blank" rel="noopener" className="menu__resource-link">Apple Music ↗</a>
      </li>
      <li className="menu__resource">
        <a href="#" target="_blank" rel="noopener" className="menu__resource-link">VK Music ↗</a>
      </li>
    </ul>
    <section className="banner">
      <h1 className="banner__title"><img className="banner__img" src={mainBanner} alt="баннер"/></h1>
    </section>
    <Media/>
  </header>)
}

export default Header
