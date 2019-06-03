import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Slider from "react-slick"

import SEO from "../components/seo"

import "./index.css"

export const slideshowImage = graphql`
  fragment slideshowImage on File {
    childImageSharp {
      fixed(height: 400) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const staticQuery = graphql`
  query {
    waffles4: file(relativePath: { eq: "waffles4.jpg" }) {
      ...slideshowImage
    }
    waffles5: file(relativePath: { eq: "waffles5.jpg" }) {
      ...slideshowImage
    }
    waffles2: file(relativePath: { eq: "waffles2.jpg" }) {
      ...slideshowImage
    }
    waffles3: file(relativePath: { eq: "waffles3.jpg" }) {
      ...slideshowImage
    }
  }
`

const NextArrow = ({ className, style, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={["far", "chevron-right"]}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  )
}
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={["far", "chevron-left"]}
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  )
}

const Slideshow = ({ data }) => {
  const names = Object.keys(data)
  const images = Object.values(data)
  images.forEach((el, idx) => (el.name = names[idx]))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
  }
  return (
    <Slider {...settings}>
      {images.map(image => (
        <Img
          fixed={image.childImageSharp.fixed}
          key={image.id}
          alt={image.name.replace(/-/g, " ").substring(2)}
        />
      ))}
    </Slider>
  )
}

const Index = props => (
  <div className="index">
    <SEO title="Thang's Wangs & Waffles" />
    <Slideshow data={props.data} />
  </div>
)

export default Index
