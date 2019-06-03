import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { scaleDown as Menu } from "react-burger-menu"
import "hamburgers/dist/hamburgers.min.css"

import thangsWangsLogo from "../images/thangsWangsLogoHorizontal.svg"

import "./header.css"

const HeaderCtx = React.createContext()

const Header = () => {
  const [menuOpenState, setMenuOpenState] = useState(false)

  return (
    <HeaderCtx.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        closeMenu: () => setMenuOpenState(false),
        stateChangeHandler: newState => setMenuOpenState(newState.isOpen),
      }}
    >
      <Navigation />
    </HeaderCtx.Provider>
  )
}

const Hamburger = () => {
  const ctx = useContext(HeaderCtx)
  return (
    <button
      id="hamburger"
      className={
        ctx.isMenuOpen
          ? "hamburger hamburger--collapse is-active"
          : "hamburger hamburger--collapse"
      }
      type="button"
      onClick={ctx.toggleMenu}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  )
}

const Navigation = () => {
  const ctx = useContext(HeaderCtx)

  return (
    <>
      <header>
        <div className="header-logo">
          <Link to="/" onClick={ctx.closeMenu}>
            <img src={thangsWangsLogo} alt="Thang's Wangs & Waffles" />
          </Link>
        </div>

        <div className="header-desktop">
          <Link
            to="/location/"
            className="header-link"
            activeClassName="active"
          >
            HOURS & LOCATION
          </Link>
          <Link to="/menu/" className="header-link" activeClassName="active">
            MENU
          </Link>
          <Link to="/about/" className="header-link" activeClassName="active">
            ABOUT
          </Link>
          <Link to="/contact/" className="header-link" activeClassName="active">
            CONTACT
          </Link>
          <Link
            to="/catering/"
            className="header-link"
            activeClassName="active"
          >
            CATERING
          </Link>
        </div>
      </header>
      <Hamburger />
      <Menu
        id={"mobileMenu"}
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        isOpen={ctx.isMenuOpen}
        onStateChange={state => ctx.stateChangeHandler(state)}
        disableAutoFocus
        width={"100vw"}
        bodyClassName={"body-menu-open"}
        customBurgerIcon={false}
        customCrossIcon={false}
        noOverlay
      >
        <div onClick={ctx.toggleMenu}>
          <Link to="/location/" className="menu-item" activeClassName="active">
            HOURS & LOCATION
          </Link>
          <Link to="/menu/" className="menu-item" activeClassName="active">
            MENU
          </Link>
          <Link to="/about/" className="menu-item" activeClassName="active">
            ABOUT
          </Link>
          <Link to="/contact/" className="menu-item" activeClassName="active">
            CONTACT
          </Link>
          <Link to="/catering/" className="menu-item" activeClassName="active">
            CATERING
          </Link>
        </div>
      </Menu>
    </>
  )
}

export default Header
