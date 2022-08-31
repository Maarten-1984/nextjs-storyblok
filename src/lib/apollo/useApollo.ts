import { ApolloClient, NormalizedCacheObject } from "@apollo/client"
import { useMemo } from "react"
import { createApolloClient } from "./apolloClient"

let apolloClient: ApolloClient<NormalizedCacheObject>

export const initializeApollo = (initialState = null) => {
  const client = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    client.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return client
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = client

  return client
}

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__"

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
