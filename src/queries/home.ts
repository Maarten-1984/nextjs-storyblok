import { useQuery, gql } from "@apollo/client"
import { SbBlokData, StoryData } from "@storyblok/react"

export interface HomeData {
  content: SbBlokData
}

export interface HomeQueryData {
  PageItem: StoryData<SbBlokData>
}

export interface HomeVariables {
  id: string
}

export const GET_HOME = gql`
  query PageItem($id: ID!) {
    PageItem(id: $id) {
      id
      name
      content {
        _uid
        component
        body
      }
    }
  }
`

export const useHomeQuery = (slug: string) =>
  useQuery<HomeQueryData, HomeVariables>(GET_HOME, {
    variables: { id: slug },
    fetchPolicy: "cache-first",
    notifyOnNetworkStatusChange: true
  })
