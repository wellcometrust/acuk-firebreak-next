import fetch from 'isomorphic-unfetch'

import Layout from '../../layouts/default'

type ArticleProps = {
  title: string;
  body?: {
    value: string;
  };
}

const Article = ({ title, body }: ArticleProps) => (
  <Layout>
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body?.value }} />
    </div>
  </Layout>
)

Article.getInitialProps = async (context: any) => {
  const { id } = context.query
  const response = await fetch(`${process.env.API_ROOT}/article/${id}`)
  const { data } = await response.json()
  const { title, body } = data.attributes

  return { title, body }
}

export default Article
