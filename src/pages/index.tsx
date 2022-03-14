import * as React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../components/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Home" padding={false}>
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
