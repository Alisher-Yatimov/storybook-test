import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export interface Props {
  color?: string;
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const size = {
  small: {
    width: "50px",
    height: "40px",
  },
  medium: {
    width: "100px",
    height: "45px",
  },
  large: {
    width: "150px",
    height: "65px",
  },
};

const StyledButton = styled.button`
  width: ${(props) => size[props.size || 'large'].width};
  background: ${(props: Props) => props.color || "tomato"};
  border: none;
  height: ${props => size[props.size || 'large'].height};
  border-radius: 5px;
  outline: none;
`;

export const Button: FC<Props> = (props: Props) => (
  <StyledButton {...props}>{props.children}</StyledButton>
);
