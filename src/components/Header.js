import React from 'react'
import Media from './Media.js'
import logo from "../images/header-logo.svg";
import mainBanner from "../images/turbina.svg";

function Header(props) {

//функция открытия стримингов
  const addMenu = () => {
    document.querySelector('.menu__open-streamings').parentNode.classList.add('menu__resource_invisible');
    document.querySelector('.menu__close-button').parentNode.classList.remove('menu__resource_invisible');
    document.querySelectorAll('.menu__resource-link').forEach(el => el.classList.add('menu__resource-link_visible'));
  }

//функция закрытия стримингов
  const removeMenu = () => {
    document.querySelector('.menu__open-streamings').parentNode.classList.remove('menu__resource_invisible');
    document.querySelector('.menu__close-button').parentNode.classList.add('menu__resource_invisible');
    document.querySelectorAll('.menu__resource-link').forEach(el => el.classList.remove('menu__resource-link_visible'));
  }




  return (<header className="header">
    <a href="#" target="_blank" rel="noopener" className="header__link">
      <img src={logo} alt="логотип" className="header__logo"/>
    </a>
    <ul className="menu__resources">
      <li className="menu__resource">
        <button type="button" aria-label="list" className="menu__button menu__open-streamings" onClick={addMenu}>Стриминги</button>
      </li>
      <li className="menu__resource menu__resource_invisible">
        <button type="button" aria-label="list" className="menu__button menu__close-button" onClick={removeMenu}/>
      </li>
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
    <Media isBlur={props.isBlur}/>
  </header>)
}

export default Header
