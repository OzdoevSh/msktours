import React from 'react';
import styled from "styled-components";

const Select = styled.select`
  box-sizing: border-box;
  width: 100%;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 10px;
  color: black !important; 
  font-size: 18px;
  height: 40px;
  padding: 30px 15px;
  border: 2px solid #0561a3;
  margin-bottom: 20px;
`

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <Select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <h1>dsjdksjdskdj</h1>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.id}
                </option>
            )}
        </Select>
    );
};

export default MySelect;