import styled from "styled-components"

export const Paragraph = styled.p<{ margin?: string }>`
  font-size: ${({ theme }) => theme.typography.p.fontSize};
  line-height: ${({ theme }) => theme.typography.p.lineHeight};
  margin: ${({ margin }) => margin || "20px 0"};
  font-weight: 100;
`
