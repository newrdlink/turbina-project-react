import React from 'react'
import currentYear from '../utils/currentYear'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__author">&copy; Маршак, {currentYear()}.</p>
      <p className="footer__author">Сделано студентами <a className="footer__author-link"
        href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
      </p>
    </footer>
  )
}

export default Footer
