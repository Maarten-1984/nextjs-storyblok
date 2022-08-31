import styled from "styled-components"

const Loading = () => (
  <Container>
    <span>loading</span>
  </Container>
)

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  background-color: transparent;
  background-image: linear-gradient(0deg, #1156b6 33%, #00062d 100%);
  display: grid;
  place-items: center;
  font-size: 4rem;
`

export default Loading
