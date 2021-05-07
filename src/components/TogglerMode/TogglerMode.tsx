import React, { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";

export interface Props {
  modes: Array<string>;
  btnText: string;
  btnSize?: 'small' | 'medium' | 'large';
}

const StyledTogglerMode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TogglerMode: FC<Props> = (props: Props) => {
  const { modes, btnSize, btnText } = props;
  const [mode, setMode] = useState(0);
  let btnHandler: (event: any) => any;
  btnHandler = (e: React.MouseEventHandler<HTMLButtonElement>) => {
    setMode((prevState) => ++prevState);

    if (mode >= modes.length - 1) {
      setMode(0);
    }
  };
  return (
    <StyledTogglerMode>
      <Button onClick={btnHandler} size={btnSize || 'medium'}>{btnText}</Button>
      <p>{modes[mode]}</p>
    </StyledTogglerMode>
  );
};
