import { SbBlokData, StoryblokComponent } from "@storyblok/react"
import styled from "styled-components"

const Page = ({ blok }: any) => (
  <>
    {blok?.body?.map((nestedBlok: SbBlokData) => {
      const fullWidth =
        nestedBlok.component === "hero" || nestedBlok.component === "intro"

      return (
        <Section
          key={nestedBlok._uid}
          fullWidth={fullWidth}
          noMargin={fullWidth}
        >
          <StoryblokComponent blok={nestedBlok} />
        </Section>
      )
    })}
  </>
)

export const Section = styled.div<{ fullWidth?: boolean; noMargin?: boolean }>`
  padding: ${({ fullWidth }) => (!fullWidth ? "0 20px" : "0")};
  max-width: ${({ fullWidth }) => (fullWidth ? "100%" : "1280px")};
  margin: ${({ fullWidth }) => (fullWidth ? "0" : "96px auto")};
`

export default Page
