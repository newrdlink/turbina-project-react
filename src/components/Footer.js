import React from 'react'
import currentYear from '../utils/currentYear'
import {authors} from '../utils/resources'

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__author">&copy; Маршак, {currentYear()}.</p>
      <p className="footer__author">Сделано студентами <a className="footer__author-link" target="_blank"
        href={authors.url}>{authors.title}</a>
      </p>
    </footer>
  )
}

export default Footer
