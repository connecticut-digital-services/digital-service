import React from "react";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import SEO from "../components/seo";
import Block from '../components/block';
import {
  Timeline,
  Events,
  TextEvent,
} from '@merc/react-timeline';

const theme = {
  "timeline": {
    "backgroundColor": "inherit",
    "fontSize": "1rem",
    "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica,\n  Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
  },
  "timelineTrack": {
    "left": "50%",
    "width": "2px",
    "height": "100%",
    "backgroundColor": "#cccccc",
    "content": "''"
  },
  "marker": {
    "backgroundColor": "#3a95d2",
    "border": "2px solid #ffffff",
    "borderRadius": "4px",
    "width": "20px",
    "height": "10px",
    "zIndex": 100
  },
  "card": {
    "backgroundColor": "#cdefff",
    "color": "#333",
    "padding": "20px",
    "width": "100%",
    "maxWidth": "560px",
    "a": {
      "color": "#3a95d2"
    }
  },
  "button": {
    "fontSize": "14px",
    "backgroundColor": "rebeccapurple",
    "borderRadius": "4px",
    "padding": "6px",
    "color": "#fff",
    "margin": "10px 5px 5px 0",
    "border": "none",
    "cursor": "pointer"
  },
  "urlButton": {
    "fontSize": "14px",
    "backgroundColor": "rebeccapurple",
    "borderRadius": "4px",
    "padding": "6px",
    "margin": "10px 5px 5px 0",
    "border": "none",
    "color": "#fff"
  },
  "date": {
    "backgroundColor": "#ec24b5",
    "padding": "4px",
    "color": "#fff",
    "borderRadius": "4px",
    "fontWeight": 500,
    "fontSize": ".85rem"
  },
  "imageAtom": {
    "objectFit": "cover",
    "overflow": "hidden",
    "width": "100%",
    "maxHeight": "400px"
  },
  "imageCredit": {
    "marginTop": "10px",
    "fontSize": "0.85rem"
  },
  "imageText": {
    "marginBottom": "10px",
    "fontSize": "1rem"
  },
  "youTubeText": {
    "marginBottom": "10px",
    "fontSize": "1rem"
  },
  "events": {
    "padding": "10px"
  },
  "event": {
    "marginBottom": "40px"
  },
  "textAtom": {}
}

function AreaPage({data, html}) {
  const content = data.markdownRemark;

  return (
    <Layout>
      <SEO
        keywords={[`ct digital service`, `connecticut`]} 
        title="Connecticut Digital Service"
      />
      <Block>
        <a href="/" className={`ct-text-primary-normal ct-underline`}>Home</a>
        <div className={`ct-flex ct-items-center ct-mb-10`}>
          <div className={`ct-mr-2 ct-text-4xl ct-pt-1 ct-text-secondary-green`}>
            <i class={`fad fa-${content.frontmatter.icon}`}></i>
          </div>
          <h1 className={`ct-text-4xl ct-font-bold`}>{ content.frontmatter.title }</h1>
        </div>
        <div className={`ct-text-xl ct-prose`}>
          <div dangerouslySetInnerHTML={{__html: content.html}}></div>
        </div>
        {content.frontmatter.items && (
          <div className={`ct-py-4`}>
            <Timeline opts={{layout: 'inline-evts-inline-date'}} theme={theme}>
              <Events>
                {content.frontmatter.items.map((item, index) => {
                  return (
                    <TextEvent 
                        key={index}
                        date={false}
                        text={`**${item.title}**\n\n${item.description}`}
                      />
                  )
                })}
              </Events>
            </Timeline>
          </div>
        )}
      </Block>
    </Layout>
  );
}

export const pageQuery = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      icon
      items {
        title
        description
      }
    }
  }
}
`

export default AreaPage;