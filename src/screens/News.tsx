import { StoryblokComponent, useStoryblokState } from "@storyblok/react"
import type { NextPage } from "next"
import Loading from "../components/General/Loading"

import { useNewsQuery } from "../queries/news"

interface Props {
  slug: string
}

const News: NextPage<Props> = ({ slug }) => {
  const { data, loading, error } = useNewsQuery(slug)

  const story = useStoryblokState(data?.NewsItem)

  if (loading) return <Loading />
  if (error) return <div>error</div>

  return story?.content ? (
    <>
      <StoryblokComponent blok={story?.content} />
    </>
  ) : (
    <>No Components</>
  )
}

export default News
