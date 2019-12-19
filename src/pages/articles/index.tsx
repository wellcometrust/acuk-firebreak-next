import fetch from 'isomorphic-unfetch'

import Layout from '../../layouts/default'

import TitleBanner from '../../components/TitleBanner'
import ListingItem from '../../components/ListingItem'

type ArticlesIndexProps = {
  articles?: []
}

const ArticlesIndex = ({ articles }: ArticlesIndexProps) => (
  <Layout>
    <TitleBanner title={`Articles`} />
    {
      articles.map(({ id, attributes }, key) =>
        <ListingItem
          id={id}
          key={key}
          type={`article`}
          {...attributes}
        />
      )
    }
  </Layout>
)

export default ArticlesIndex

ArticlesIndex.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_ROOT}/article/`)
  const { data } = await response.json()

  return { articles: data }
}
