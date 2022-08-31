import { GetStaticProps } from "next"
import Overview from "../screens/Homepage"

import { GET_HOME, HomeData, HomeVariables } from "../queries/home"
import { addApolloState, initializeApollo } from "../lib/apollo/useApollo"

export const getStaticProps: GetStaticProps = async () => {
  const slug = `home`
  const apolloClient = initializeApollo()

  try {
    await apolloClient.query<HomeData, HomeVariables>({
      query: GET_HOME,
      variables: { id: slug }
    })

    return addApolloState(apolloClient, {
      props: {
        id: "/",
        noData: false,
        slug
      },
      revalidate: 60
    })
  } catch (error) {
    return { props: { noData: true }, revalidate: 60 }
  }
}

export default Overview
