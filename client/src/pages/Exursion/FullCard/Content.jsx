import React from 'react';
import styled from "styled-components";

const ExContent = styled.div`
  font-size: 16px;
  color: #2f3235;
   
  box-sizing: border-box;
  overflow: hidden;
`
const Text = styled.div`
  font-size: 16px;
  color: #2f3235;
  line-height: 1.5;
  
  box-sizing: border-box;
  overflow: hidden;
  padding-bottom: 1rem;
  text-align: justify;
`
const P = styled.p`
  font-size: 16px;
  color: #2f3235;
   
  box-sizing: border-box;
  margin-top: 0;
`
const Content = ({fullDescription}) => {
    return (
        <ExContent>
            <Text>
                <P>
                    {fullDescription}
                </P>
            </Text>
        </ExContent>
    );
};

export default Content;