import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import { ImageType } from "../../types"
import { Heading, Paragraph } from "../General"
import { Section } from "../Page"

interface Props {
  blok: {
    title: string
    intro: string
    image: ImageType
  }
}

const Intro = ({ blok }: Props) => (
  <Header>
    <Section>
      <Link href="/">
        <ArrowLink>
          <span>&larr;</span> Ga terug
        </ArrowLink>
      </Link>
      <Heading.HeadingOne>{`${blok.title}`}</Heading.HeadingOne>
      <Paragraph>{`${blok.intro}`}</Paragraph>
      {/* <Image src={blok.image.filename} alt={blok.title} layout="fill" /> */}
    </Section>
  </Header>
)

const Header = styled.header`
  background-color: transparent;
  background-image: linear-gradient(0deg, #1156b6 33%, #00062d 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  min-height: 30vh;
  padding: 48px;
  color: #fff;

  > div {
    max-width: 780px;
  }
`

const ArrowLink = styled.a`
  display: block;
  margin-bottom: 48px;
  cursor: pointer;

  &:hover {
    span {
      transform: translateX(-10px);
    }
  }

  span {
    display: inline-block;
    transition: transform 0.2s ease-in-out;
  }
`

export default Intro
