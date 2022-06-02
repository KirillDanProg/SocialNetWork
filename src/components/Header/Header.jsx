import React from "react"
import s from "./Header.module.css"

const Header = () => {
    return(
        <header className={s.header}>
        <img src="" alt="" className={s.logo} />
        <nav className={s.nav}>
          <ul className={s.list}>
            <li className={s.item}>
              <a href="">Main</a>
            </li>
            <li className={s.item}>
              <a href="">Contacts</a>
            </li>
            <li className={s.item}>
              <a href="">Profile</a>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header