import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import chevron from '../../static/img/chevron.svg'

const Hero = ({ className, text, cta, cta_url, bg, announcements_title, announcements }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={bg.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div className="ct-max-w-5xl ct-container ct-mx-auto ct-py-4 md:ct-py-20">
        <div className={`ct-bg-black-alpha ct-p-8 ct--mx-8`}>
          <h2 className="ct-text-2xl md:ct-text-4xl ct-text-white ct-max-w-5xl ct-leading-tight">{text}</h2>
          {announcements && (
            <div className="ct-mt-8">
              <h3 className={`ct-text-white ct-mb-4 ct-font-bold`}>{announcements_title}</h3>
              <div className={`ct-flex ct-flex-wrap ct--mx-2`}>
                {announcements.map((announcement, index) => {
                  return (
                    <a key={index} href={announcement.cta_link} className={`ct-flex ct-flex-col md:ct-flex-row md:ct-items-center ct-mx-2 md:ct-w-3/4 ct-p-4 ct-border-2 ct-border-primary-normal ct-block hover:ct-border-primary-dark hover:ct-bg-primary-dark`}>
                      <div class="ct-w-1/2 md:ct-w-1/4 ct-mr-6 ct-mb-6 md:ct-mb-0">
                        <Img
                          fluid={announcement.image.childImageSharp.fluid}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className={`ct-text-white ct-font-bold ct-mb-2`}>{announcement.title}</div>
                        <div className={`ct-text-white ct-mb-2 ct-flex-grow`}>{announcement.description}</div>
                        <div className={`ct-text-white ct-font-bold`}><i class={`fas fa-arrow-right ct-mr-2`}></i> {announcement.cta_text}</div>
                      </div>                    
                    </a>
                  )
                })}
              </div>
            </div>
          )}
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
}
const StyledBackgroundSection = styled(Hero)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default Hero