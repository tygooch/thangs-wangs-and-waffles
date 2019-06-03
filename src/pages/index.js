import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BackgroundImage from "gatsby-background-image"

import SEO from "../components/seo"
import "./index.css"
import foodTruckIcon from "../images/foodTruckIcon2.svg"

export const slideshowImage = graphql`
  fragment slideshowImage on File {
    childImageSharp {
      fluid(maxHeight: 500, maxWidth: 1200) {
        ...GatsbyImageSharpFluid
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

// const Slideshow = ({ data }) => {
//   const names = Object.keys(data)
//   const images = Object.values(data)
//   images.forEach((el, idx) => (el.name = names[idx]))

//   return (
//     <Carousel wrapAround={true} withoutControls={true} autoplay={true}>
//       {images.map(image => (
//         <Img
//           fluid={image.childImageSharp.fluid}
//           key={image.id}
//           alt={image.name.replace(/-/g, " ").substring(2)}
//         />
//       ))}
//     </Carousel>
//   )
// }

const Index = props => (
  <div className="index">
    <SEO title="Thang's Wangs & Waffles" />
    <div style={{ width: "100%" }}>
      <BackgroundSection />
    </div>
  </div>
)

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "wafflesBuffalo.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage className={"waffle-background"} fluid={imageData} />
      )
    }}
  />
)

export default Index
