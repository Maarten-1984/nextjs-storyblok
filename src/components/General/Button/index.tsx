import Link from "next/link"
import styled from "styled-components"
import { LinkType } from "../../../types"

interface Props {
  href?: LinkType
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, href, onClick }: Props) =>
  onClick ? (
    <Container onClick={onClick}>{children}</Container>
  ) : (
    <Link href={href?.url || href?.cached_url || ""} scroll={false}>
      <Container>{children}</Container>
    </Link>
  )

const Container = styled.a<{ margin?: string }>`
  color: ${({ theme }) => theme.colors.button};
  background-color: ${({ theme }) => theme.colors.buttonBg};
  font-size: ${({ theme }) => theme.typography.button.fontSize};
  line-height: ${({ theme }) => theme.typography.h3.lineHeight};
  margin: ${({ margin }) => margin || "20px 0"};
  padding: 16px;
  border-radius: 8px;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonBgHover};
  }
`

export default Button
