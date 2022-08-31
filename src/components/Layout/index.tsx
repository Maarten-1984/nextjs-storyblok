import { useState } from "react"
import styled from "styled-components"
import useIsomorphicLayoutEffect from "../../hooks/useIsomorphicLayoutEffect"

interface Props {
  children: React.ReactNode
}

const TransitionLayout = ({ children }: Props) => {
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitionStage, setTransitionStage] = useState("fadeOut")

  useIsomorphicLayoutEffect(() => {
    setTransitionStage("fadeIn")
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (children !== displayChildren) setTransitionStage("fadeOut")
  }, [children, displayChildren])

  return (
    <Content
      onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          setDisplayChildren(children)
          setTransitionStage("fadeIn")
        }
      }}
      fadeIn={transitionStage}
    >
      {displayChildren}
    </Content>
  )
}

const Content = styled.div<{ fadeIn: string }>`
  transition: 0.7s;
  opacity: ${({ fadeIn }) => (fadeIn === "fadeIn" ? 1 : 0)};
`

export default TransitionLayout
