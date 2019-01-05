import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby','react','tutorial']} />
    <h1>Welcome to my website</h1>
    <p>This is a sample site for the Gatsby crash course</p>
  </Layout>
)

export default IndexPage
