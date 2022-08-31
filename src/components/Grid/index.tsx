import {
  SbBlokData,
  storyblokEditable,
  StoryblokComponent
} from "@storyblok/react"
import { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface BlockProps extends SbBlokData {
  columns: any
}

interface Props {
  blok: BlockProps
}

const Grid = ({ blok }: Props) => {
  const ref = useRef(null)

  useEffect(() => {
    ScrollTrigger.batch(".card", {
      onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, stagger: 0.1 })
    })
  }, [])

  return (
    <Container {...storyblokEditable(blok)}>
      {blok?.columns.map((nestedBlock: SbBlokData) => (
        <AnimateCard key={nestedBlock._uid} className="card">
          <StoryblokComponent blok={nestedBlock} />
        </AnimateCard>
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: grid;

  ${({ theme }) => theme.breakpoints.md} {
    grid-template-columns: repeat(3, 1fr);
  }

  gap: 48px;
`

const AnimateCard = styled.div`
  opacity: 0;
  background: #f8f8f8;
`

export default Grid
