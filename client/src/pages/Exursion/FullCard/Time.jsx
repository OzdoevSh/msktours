import React from 'react';
import styled from 'styled-components'
import moment from 'moment';
import 'moment/locale/ru';

const Wrapper = styled.div`
  font-size: 16px;
  color: #2f3235;
  line-height: 1.5;
   
  box-sizing: border-box;
  display: inline-block;
  border-top: 1px dotted #bdc2c1;
  border-bottom: 1px dotted #bdc2c1;
  padding-bottom: 25px;
  width: 100%;
`
const Header = styled.header`
  font-size: 16px;
   
  box-sizing: border-box;
  line-height: 20px;
  text-align: left;
  color: #2f3235;
`
const Content = styled.div`
  font-size: 16px;
  color: #2f3235;
   
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 20px;
`
const Container = styled.table`
  font-size: 16px;
  list-style: none;
  box-sizing: border-box;
  border-spacing: 0;
  color: #2f3235;

  line-height: 25px;
  margin: 0 -15px 10px;
  margin-top: 0;
`
const Date = styled.td`
  font-size: 18px;
  list-style: none;
  border-spacing: 0;
  color: #2f3235;

  line-height: 25px;
  box-sizing: border-box;
  white-space: nowrap;
  padding: 5px 15px;
  vertical-align: top;
`

const Time = ({date}) => {
    return (
        <Wrapper>
            <Header>
                <h3>Когда?</h3>
            </Header>
            <Content>
                <Container>
                    <tbody>
                    <tr>
                        <Date>
                           {moment(date).format('LLLL')}
                        </Date>
                        <td><br/></td>
                    </tr>
                    </tbody>
                </Container>
            </Content>
        </Wrapper>
    );
};

export default Time;