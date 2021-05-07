import React, { FC, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input";

const StyledInputButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-direction: ${(props: StyledProps) => props.direction || 'row'};
`;


interface StyledProps {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}
export interface Props extends StyledProps {
  submitHandler: (msg: string) => void;
}

export const InputButton: FC<Props> = ({submitHandler, ...props}) => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    setInputValue(target.value);
  };
  return (
    <StyledInputButton {...props}>
      <Input
        placeholder="type smth."
        borderColor="#ccc"
        onChange={inputHandler}
      />
      <Button onClick={() => submitHandler(inputValue)} disabled={!inputValue}>
        button
      </Button>
    </StyledInputButton>
  );
};
