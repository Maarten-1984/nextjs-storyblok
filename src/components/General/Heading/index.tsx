import styled, { css } from "styled-components"

const HeadingOne = styled.h1<{ margin?: string }>`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  line-height: ${({ theme }) => theme.typography.h1.lineHeight};
  margin: ${({ margin }) => margin || "0 0 20px"};
`

const HeadingTwo = styled.h2<{ margin?: string }>`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  line-height: ${({ theme }) => theme.typography.h2.lineHeight};
  margin: ${({ margin }) => margin || "0 0 20px"};
`

const HeadingThree = styled.h3<{ margin?: string }>`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  margin: ${({ margin }) => margin || "0 0 20px"};
`

export { HeadingOne, HeadingTwo, HeadingThree }
