import { FC, ReactNode } from "react";
import styled from "styled-components";
import logo from "../../logo.svg";

const StyledHeader = styled.header`
  background-color: #4444a0;
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: ${(props: Props) => props.headerJustify || 'flex-start'};
  align-items: ${(props: Props) => props.headerAlign || 'flex-start'};
  flex-direction: ${(props: Props) => props.headerDirection || 'row'};
`;
const Navigation = styled.nav`
  width: 500px;
  display: flex;
  justify-content: ${(props: Props) => props.navJustify || 'flex-start'};
  align-items: ${(props: Props) => props.navAlign || 'flex-start'};
  flex-direction: ${(props: Props) => props.navDirection || 'row'};
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Link = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  color: #fff;
  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: #fff;
    transform: scale(0);
    transition: all ease 0.3s;
  }
  &:hover:after {
    transform: scale(1);
  }
`;

type JustifyFlex =
  | "center"
  | "space-between"
  | "space-evenly"
  | "space-around"
  | "flex-start"
  | "flex-end";

type AlignFlex = "center" | "flex-start" | "flex-end";
type DirectionFlex = "row" | "row-reverse" | "column" | "column-reverse";

export interface Props {
  children?: ReactNode;
  headerDirection?: DirectionFlex;
  headerJustify?: JustifyFlex;
  headerAlign?: AlignFlex;
  navDirection?: DirectionFlex;
  navJustify?: JustifyFlex;
  navAlign?: AlignFlex;
}

export const Header: FC<Props> = (props: Props) => (
  <StyledHeader>
    <Container {...props}>
      <Logo src={logo} alt="logo" {...props}/>
      <Navigation {...props}>
        <Link href="#" {...props} key="link 1">link 1</Link>
        <Link href="#" {...props} key="link 2">link 2</Link>
        <Link href="#" {...props} key="link 3">link 3</Link>
        <Link href="#" {...props} key="link 4">link 4</Link>
      </Navigation>
    </Container>
  </StyledHeader>
);
