import {
  SbBlokData,
  StoryblokComponent,
  useStoryblokState
} from "@storyblok/react"
import type { NextPage } from "next"
import Link from "next/link"
import styled from "styled-components"
import { Heading, Paragraph } from "../components/General"
import { Section } from "../components/Page"

import { useNewsQuery } from "../queries/news"

interface Props {
  slug: string
}

const News: NextPage<Props> = ({ slug }) => {
  const { data, loading, error } = useNewsQuery(slug)

  const story = useStoryblokState(data?.NewsItem)

  if (loading)
    return (
      <Loading>
        <span>loading</span>
      </Loading>
    )
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

export const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  background-color: transparent;
  background-image: linear-gradient(0deg, #1156b6 33%, #00062d 100%);
  display: grid;
  place-items: center;

  font-size: 4rem;
`

export default News
