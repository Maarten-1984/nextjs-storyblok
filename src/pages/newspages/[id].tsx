import { GetStaticPaths, GetStaticProps } from "next"

import News from "../../screens/News"

import { addApolloState, initializeApollo } from "../../lib/apollo/useApollo"

import { GET_NEWS, NewsQueryData, NewsVariables } from "../../queries/news"

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params || {}
  const slug = `newspages/${id}`
  const apolloClient = initializeApollo()

  try {
    const response = await apolloClient.query<NewsQueryData, NewsVariables>({
      query: GET_NEWS,
      variables: { id: slug }
    })

    return addApolloState(apolloClient, {
      props: {
        id,
        slug
      },
      revalidate: 60
    })
  } catch (error) {
    return { notFound: true, revalidate: 60 }
  }
}

export default News
