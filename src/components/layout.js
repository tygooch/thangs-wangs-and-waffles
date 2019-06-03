import React from "react"
import PropTypes from "prop-types"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/pro-solid-svg-icons"
import { fal } from "@fortawesome/pro-light-svg-icons"
import { far } from "@fortawesome/pro-regular-svg-icons"
import { useAlert } from "react-alert"

import Header from "./header"
import "./layout.css"

library.add(fas, far, fal)

const Layout = ({ children }) => {
  return (
    <div
      id="outer-container"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: window.innerHeight,
      }}
    >
      <Header />
      <main id="page-wrap">
        {children}
        {/* <footer>
          <div
            style={{
              textAlign: "center",
            }}
          >
            &copy; 2019 Thang's Wang's & Waffles
          </div>
        </footer> */}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
