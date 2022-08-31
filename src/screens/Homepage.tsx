import { StoryblokComponent, useStoryblokState } from "@storyblok/react"
import type { NextPage } from "next"
import styled from "styled-components"

import { useHomeQuery } from "../queries/home"

interface Props {
  slug: string
}

const Home: NextPage<Props> = ({ slug }) => {
  const { data, loading, error } = useHomeQuery(slug)

  const story = useStoryblokState(data?.PageItem)

  if (loading) return <div>loading</div>
  if (error) return <div>error</div>

  return story?.content ? (
    <>
      <StoryblokComponent blok={story?.content} />
      <Footer></Footer>
    </>
  ) : (
    <>No Components</>
  )
}

const Footer = styled.footer`
  background: blue;
  margin-top: 48px;
`

export default Home
