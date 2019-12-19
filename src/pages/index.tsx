import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

import Layout from '../layouts/default'

import TitleBanner from '../components/TitleBanner'

const Index = () => (
  <Layout>
    <TitleBanner title={`Homepage`} />
    <div className='o-container u-ta-c'>
      <p>Wellcome to my websites</p>
    </div>
  </Layout>
)

export default Index
