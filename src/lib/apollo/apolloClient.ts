import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache
} from "@apollo/client"

export const createApolloClient = () => {
  const httpLink = new HttpLink({ uri: "https://gapi.storyblok.com/v1/api" })

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        token: process.env.NEXT_PUBLIC_PREVIEW_TOKEN,
        version: "draft"
      }
    }))
    return forward(operation)
  })

  return new ApolloClient({
    ssrMode: typeof window !== undefined,
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache()
  })
}
