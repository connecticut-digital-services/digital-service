import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import chevron from '../images/chevron.svg'

const Hero = ({ className, text, title, cta, cta_url }) => (
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
          <div className="ct-max-w-5xl ct-container ct-mx-auto ct-py-4 md:ct-py-20">
            <div className={`ct-bg-black-alpha ct-p-8 ct--mx-8`}>
              <h2 className="ct-text-2xl md:ct-text-4xl ct-text-white ct-max-w-5xl ct-leading-tight">{text}</h2>
              <div className="ct-mt-8">
                <a href={cta_url} className={`ct-inline-flex ct-bg-primary-normal hover:ct-bg-primary-dark ct-text-white`}>
                  <span className={`ct-px-6 ct-py-4 ct-font-bold`}>{cta}</span>
                  <span className={`ct-flex ct-items-center ct-justify-center ct-bg-primary-dark ct-w-16`}>
                    <img src={chevron} role={`presentation`} className={`ct-w-6`} />
                  </span>
                </a>
              </div>
            </div>
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