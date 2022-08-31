import StoryblokClient, { Richtext } from "storyblok-js-client"
import styled from "styled-components"
import { Heading } from "../General"

interface Props {
  blok: {
    title: string
    text: Richtext
  }
}

let Storyblok = new StoryblokClient({
  accessToken: process.env.NEXT_PUBLIC_PREVIEW_TOKEN
})

const createMarkup = (storyblokHTML: Richtext) => {
  return {
    __html: Storyblok.richTextResolver.render(storyblokHTML)
  }
}

const RichText = ({ blok }: Props) => (
  <Container>
    {blok?.title && <Heading.HeadingTwo>{blok?.title}</Heading.HeadingTwo>}
    <div dangerouslySetInnerHTML={createMarkup(blok.text)} />
  </Container>
)

const Container = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 0 20px;
  font-weight: 300;
  line-height: 1.5;
`

export default RichText
