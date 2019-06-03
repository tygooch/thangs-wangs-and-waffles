import React from "react"
import Layout from "./src/components/layout"
import { transitions, positions, Provider as AlertProvider } from "react-alert"
import AlertTemplate from "./src/components/alertTemplate"

const options = {
  position: "bottom right",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
}

export const wrapPageElement = ({ element, props }) => {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Layout {...props}>{element}</Layout>
    </AlertProvider>
  )
}

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
