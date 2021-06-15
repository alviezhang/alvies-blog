// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

const AboutPage: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title={siteTitle} location={location} >
      <Seo title="About" />
      <Bio />

      <p>性善言讷</p>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
