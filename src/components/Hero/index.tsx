import { storyblokEditable } from "@storyblok/react"
import Image from "next/image"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

import { ImageType } from "../../types"
import { Heading, Paragraph } from "../General"
import { useEffect, useRef } from "react"

interface Props {
  blok: {
    _uid: string
    component: string
    title: string
    subtitle: string
    image?: ImageType
  }
}

const Hero = ({ blok }: Props) => {
  const { title, subtitle, image } = blok
  const content1Ref = useRef(null)
  const content2Ref = useRef(null)

  const imageRef = useRef(null)

  useEffect(() => {
    gsap.to(content1Ref?.current, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: "container",
        scrub: 2
      }
    })

    gsap.to(content2Ref?.current, {
      y: -40,
      ease: "none",
      scrollTrigger: {
        trigger: "container",
        scrub: 2
      }
    })

    gsap.to(imageRef?.current, {
      y: 30,
      ease: "none",
      scrollTrigger: {
        trigger: "container",
        scrub: 2
      }
    })
  })

  return (
    <Container {...storyblokEditable(blok)} className="container">
      <Content>
        <Left>
          <Heading.HeadingOne ref={content1Ref}>{title}</Heading.HeadingOne>
          <Paragraph ref={content2Ref}>{subtitle}</Paragraph>
        </Left>
        {image?.filename && (
          <ImageWrapper ref={imageRef}>
            <Image
              src={image?.filename}
              width={400}
              height={400}
              alt={image?.alt}
            />
          </ImageWrapper>
        )}
      </Content>
      <Overlay />
    </Container>
  )
}

const Container = styled.header`
  background-color: transparent;
  background-image: linear-gradient(0deg, #1156b6 33%, #00062d 100%);
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  min-height: 70vh;
  position: relative;
  display: grid;
  place-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  overflow: hidden;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 1;
  color: #fff;
`

const Left = styled.div`
  p {
    text-transform: uppercase;
  }
`

const ImageWrapper = styled.div`
  position: relative;
`

const Overlay = styled.div`
  background-image: url(/images/bbblurry-67.svg);
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
`

export default Hero
