import React from 'react';
import styled from 'styled-components'
import {GoCalendar} from "react-icons/all";
import {useHistory} from "react-router-dom";
import moment from 'moment';
import 'moment/locale/ru';
import MyButton from "../../UI/MyButton/MyButton";

const CardCss = styled.div`
  display: inline-block;
  width: 100%;
  @media (max-width: 1000px) {
    width: 33.3333%;
  }
  @media (max-width: 800px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  vertical-align: top;
  padding: 0 15px 15px 0;
  box-sizing: border-box;
  margin-top: 10px;
`

const Wrapper = styled.div`  
  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  position: relative;
  max-width: 100%;
  background: #fff;
  line-height: 20px;
  padding: 0;
  min-width: 240px;
  width: 100%;
  margin-top: 10px;
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  height: 435px; 
  border-radius: 5px; 
  border: 2px solid black;
`

const Preview = styled.div`
  background: url(${props => props.imgurl || ""}) center / cover no-repeat;
  height: 240px;
  margin: 0;
  max-height: 240px;
  overflow: hidden;
  border-bottom: none;
  border-radius: 5px 5px 0px 0px; 
`
const Header = styled.div`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #2f3235;
  border-bottom: 1px solid rgba(47, 50, 53, .25);
  cursor: pointer;
  background: none;
  border-bottom: none;
  text-align: center;
  width: 200px; 

  overflow: hidden; 
  display: -webkit-box; 
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical; 

`

const Span = styled.span`
  text-align: left;
  font-size: 17px;

  :hover {
    color: #827ffe;
  }

   
  font-weight: 700;
  line-height: 1.4;
  cursor: pointer;
  box-sizing: border-box;
  padding-top: 3px;
  text-decoration: none;
  color: #2f3235;
  border-bottom: 1px solid rgba(47, 50, 53, .25);
`
const Content = styled.div`

  font-size: 16px;
  color: #2f3235;
  line-height: 20px;
  box-sizing: border-box;
  position: relative;
  padding: 14px 14px 0px;
  height: 100px; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
`

const WrapperButton = styled.div`
  color: #2f3235;
  box-sizing: border-box;
  padding-bottom: 20px;
  padding-top: 20px;
  text-align: center;
  line-height: 40px;
  font-size: 13px;

  z-index: 2;
  position: relative;
  background: black;
  font-size: 34px;
  cursor: pointer;
  color: white;
`
const WrapperDate = styled.div`

  color: #2f3235;
  box-sizing: border-box;
  font-size: 12px;
  margin-bottom: 20px;
`
const ContainerDate = styled.div`
  box-sizing: border-box;
  display: block;
  margin-left: 24px;

  font-style: normal;
  font-size: 14px;
  color: #2f3235;
  padding-top: 8px;
`
const Date = styled.div`
  display: flex;
  align-items: center;

  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: #2f3235;
  font-weight: 700;
  box-sizing: border-box;
`

const CalendarIcon = styled(GoCalendar)`
  width: 20px;
  height: 20px;
  margin-right: 3px;
`

const Button = styled(MyButton)`
  width: 150px;
  height: 38px;
`

const Card = (props) => {
    const router = useHistory()
    const ExursionFullInfo = (ex) => router.push({
        pathname: `/PagesEx`,
        state: {
            id: ex.id,
            name: ex.name,
            cost: ex.cost,
            description: ex.description,
            fullDescription: ex.fullDescription,
            address: ex.address,
            date: ex.date,
            img: ex.img
        }
    })
    return (
        <CardCss>
            <Wrapper key={props.ex.id}>
                    <Preview imgurl={process.env.REACT_APP_API_URL + props.ex.img}/>
                    <Content>
                        <Header
                            onClick={() => ExursionFullInfo(props.ex)}
                        >
                            <Span>{props.ex.name}</Span>
                        </Header>
                    </Content>
  
                    <WrapperDate>
                        <ContainerDate>
                            <Date>
                                <CalendarIcon/> {moment(props.ex.date).format('D MMMM в HH:mm')}
                            </Date>
                        </ContainerDate>
                    </WrapperDate>
                    <WrapperButton onClick={() => ExursionFullInfo(props.ex)}>
                        Подробнее
                    </WrapperButton>

            </Wrapper>
        </CardCss>
    );
};

export default Card;