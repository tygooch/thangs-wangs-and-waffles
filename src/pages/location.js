import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { useAlert } from "react-alert"
import MapContainer from "../components/mapContainer"

// import "./location.css"

const Index = props => {
  const alert = useAlert()

  // useEffect(() => {
  //   alert.success(
  //     <a href="https://www.google.com/maps/place/Whiskey+Kitchen/@35.7772259,-78.6453174,17.16z/data=!4m18!1m12!4m11!1m3!2m2!1d-78.6449377!2d35.7767852!1m6!1m2!1s0x89ac5f71c72e36b1:0xb5992a9c4d9e189!2s301+US-70,+Raleigh,+NC+27601!2m2!1d-78.6416784!2d35.7768904!3m4!1s0x89ac5f71b7b7a337:0x999233cd9648783b!8m2!3d35.7767122!4d-78.642141">
  //       We're open! <br />
  //       Click here for directions!
  //     </a>
  //   )
  // }, [])

  return (
    <div className="">
      <SEO title="Hours & Location" />
      <MapContainer />
    </div>
  )
}

export default Index
