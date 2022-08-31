import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { storyblokInit } from "@storyblok/react"

import "../styles/globals.css"
import { useApollo } from "../lib/apollo/useApollo"
import { Feature, Grid, Hero, Page, RichText, Teaser } from "../components"
import { LightModeProvider, ThemeProvider } from "../ThemeProvider"
import TransitionLayout from "../components/Layout"
import { useEffect } from "react"
import Intro from "../components/Intro"

const components = {
  feature: Feature,
  grid: Grid,
  hero: Hero,
  teaser: Teaser,
  paragraph: RichText,
  page: Page,
  news: Page,
  intro: Intro
}

export default function App({ Component, pageProps, router }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState)

  useEffect(() => {
    storyblokInit({
      accessToken: process.env.NEXT_PUBLIC_PREVIEW_TOKEN,
      components
    })
  }, [])

  const handleRouteChange = () => {
    return setTimeout(() => {
      return window.scroll({
        top: 0,
        behavior: "smooth"
      })
    }, 500)
  }

  useEffect(() => {
    router?.events?.on("routeChangeComplete", handleRouteChange)

    return () => {
      router?.events?.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <LightModeProvider>
      <ThemeProvider>
        <ApolloProvider client={apolloClient}>
          <TransitionLayout>
            <Component {...pageProps} key={router.asPath} />
          </TransitionLayout>
        </ApolloProvider>
      </ThemeProvider>
    </LightModeProvider>
  )
}
