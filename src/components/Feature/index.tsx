import { SbBlokData, storyblokEditable } from "@storyblok/react"
import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"

import { ImageType, LinkType } from "../../types"
import { Button, Heading, Paragraph } from "../General"

interface BlockProps extends SbBlokData {
  image: ImageType
  link: LinkType
  link_text: string
  name: string
  text: string
}

interface Props {
  blok: BlockProps
}

const Feature = ({ blok }: Props) => {
  const { image, name, text, link, link_text } = blok

  return (
    <Container {...storyblokEditable(blok)}>
      <Image
        src={image?.filename}
        alt={image?.alt}
        width="200"
        height="200"
        objectFit="contain"
      />
      <Heading.HeadingTwo>{name}</Heading.HeadingTwo>
      <Paragraph>{text}</Paragraph>
      {link.cached_url && <Button href={link}>{link_text}</Button>}
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`

export default Feature
