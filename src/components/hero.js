import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Hero = ({ className, text }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "fall.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
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
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            <div className="ct-container ct-mx-auto ct-py-4 md:ct-py-20">
                <h1 className="ct-text-2xl md:ct-text-4xl ct-text-white ct-max-w-4xl ct-leading-tight ct-bg-black-alpha ct-p-8">{text}</h1>
            </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(Hero)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default Hero