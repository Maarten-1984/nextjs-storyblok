import { useQuery, gql } from "@apollo/client"
import { SbBlokData, StoryData } from "@storyblok/react"

export interface NewsData {
  content: SbBlokData
}

export interface NewsQueryData {
  NewsItem: StoryData<SbBlokData>
}

export interface NewsVariables {
  id: string
}

export const GET_NEWS = gql`
  query NewsItem($id: ID!) {
    NewsItem(id: $id) {
      content {
        _uid
        component
        body
      }
    }
  }
`

export const useNewsQuery = (slug: string) =>
  useQuery<NewsQueryData, NewsVariables>(GET_NEWS, {
    variables: { id: slug },
    fetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true
  })
