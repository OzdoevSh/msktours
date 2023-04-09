import React from 'react';
import styled from 'styled-components'


const StyledButton = styled.button`
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  padding: 30px 14px;
  color: #fff !important;
  text-decoration: none;
  border: none;
  vertical-align: middle;
  outline: none;
  margin: 10px 0px;

  font-weight: 700;
  font-size: 30px;
  background: black;
  text-shadow: none;
  border-radius: 10px;
  :hover {
    filter: brightness(0.7);
  }
  transition: 0.3s;
`
const MyButton = ({children, ...props}) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    );
};

export default MyButton;