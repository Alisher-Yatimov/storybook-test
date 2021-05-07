import React, { FC } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: 1px solid ${(props: Props) => props.borderColor || 'black'};
    border-radius: 5px;
    outline: none;
    height: 40px;
    width: 500px;
`;


export interface Props {
    borderColor?: string,
    placeholder: string,
    onChange?: (e: React.SyntheticEvent) => void,
}

export const Input: FC<Props> = (props) => <StyledInput {...props}/>