import Image from "next/image"
import styled from "styled-components"
import { storyblokEditable } from "@storyblok/react"

import { ImageType, LinkType } from "../../types"
import { Button, Heading, Paragraph } from "../General"

interface Props {
  blok: {
    _uid: string
    component: string
    headline: string
    alignment?: boolean
    text: string
    image: ImageType
    link_text: string
    link: LinkType
  }
}

const Teaser = ({ blok }: Props) => (
  <Container {...storyblokEditable(blok)} alignment={blok?.alignment}>
    <Content>
      <Heading.HeadingTwo>{blok?.headline}</Heading.HeadingTwo>
      <Paragraph>{blok.text}</Paragraph>
      <Button href={blok.link}>{blok.link_text}</Button>
    </Content>
    <ImageWrapper>
      <Image
        src={blok.image.filename}
        alt={blok.image.alt}
        width="500"
        height="300"
        objectFit="cover"
      />
    </ImageWrapper>
  </Container>
)

const Container = styled.div<{ alignment?: boolean }>`
  display: flex;
  flex-direction: ${({ alignment }) => (alignment ? "row-reverse" : "row")};
  justify-content: space-between;
  border: 1px solid #f2f2f2;
`

const Content = styled.div`
  padding: 48px;
`

const ImageWrapper = styled.div`
  position: relative;
  max-width: 600%;
  overflow: hidden;

  > span {
    height: 100% !important;
  }
`

export default Teaser
