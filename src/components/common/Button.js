import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
  background: ${props => props.theme.backgroundColor};
  border: 5px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  font-size: 20px;
  outline: none;
  margin: 0 5px;
  ${props => props.primary && css`
    background: blue;
  `}
  ${props => props.danger && css`
    background: red;
  `}
`;

export default Button;
