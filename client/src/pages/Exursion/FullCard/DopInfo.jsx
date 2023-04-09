import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";


const DopInfoH3 = styled.h3`
  text-align: left;
  box-sizing: border-box;
  margin: 24px 0;
  padding-top: 18px;
  position: relative;
  color: #2f3235;

  font-size: 21px;
  font-weight: 700;
`
const Header = styled.header`
  font-size: 16px;
   
  box-sizing: border-box;
  line-height: 20px;
  text-align: left;
  color: #2f3235;
`
const Content = styled.dl`
  font-size: 16px;
  color: #2f3235;
   
  box-sizing: border-box;
  line-height: 20px;
`
const WrapperContainer = styled.div`
  font-size: 16px;
  color: #2f3235;
   
  line-height: 20px;
  box-sizing: border-box;
  position: relative;
  height: 172px;
`
const GeneralContainer = styled.div`
  color: #2f3235;
  line-height: 20px;
  padding: 3px 20px 7px 0;
  font-size: 16px;
   
  max-width: 100%;
  position: absolute;
  box-sizing: border-box;
  width: 431px;
`

const TypeExhibition = styled.dd`
  color: #2f3235;
  line-height: 20px;
  padding: 3px 20px 7px 0;
  font-size: 16px;
   
  max-width: 100%;
  position: absolute;
  box-sizing: border-box;
  width: 431px;
`
const Title = styled.div`
  line-height: 20px;
  box-sizing: border-box;
  margin-top: 15px;
  font-size: 14px;
  color: #a6a8aa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;

`
const EvenPriceSpan = styled.span`
  color: #2f3235;
  line-height: 20px;
  font-size: 16px;
   
  box-sizing: border-box;
`
const ExhibitionDescription = styled.ul`
  margin: 0;
  line-height: 20px;
  font-size: 16px;
   
  box-sizing: border-box;
  color: #2f3235;
`
const CastomNavLink = styled(NavLink)`
  font-size: 16px;
   
  box-sizing: border-box;
  color: #2f3235;
  text-decoration: none;
  outline: none;
  border-bottom: 1px solid rgba(47, 50, 53, .25);
`
const Wrapper = styled.div`
  font-size: 16px;
  color: #2f3235;
   
  box-sizing: border-box;
  display: inline-block;
  border-bottom: 1px dotted #bdc2c1;
  border-top: 1px dotted #bdc2c1;
  width: 100%;
`

const TitlePhone = styled.div`
  line-height: 20px;
  box-sizing: border-box;
  margin-top: 15px;
  font-size: 14px;
  color: #a6a8aa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;

`

const Info = styled.div`
  color: #2f3235;
  line-height: 20px;
  font-size: 16px;
   
  box-sizing: border-box;
`

const PhoneContainer = styled.div`
  color: #2f3235;
  line-height: 20px;
  font-size: 16px;
   
  box-sizing: border-box;
`

const HeaderPhone = styled.div`
  list-style: none;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  text-align: center;
  padding: 8px 10px;
  z-index: 1;
  font-size: 13px;
  color: #fff;
  border-radius: 1px;

  font-weight: 700;
  background: #ee3942;
  display: none !important;
`
const PhoneDescription = styled.div`
  color: #2f3235;
  list-style: none;
  line-height: 20px;
  font-size: 16px;
   
  word-wrap: break-word;
  box-sizing: border-box;
  display: inline-block;
`

const Note = styled.div`
  list-style: none;
  line-height: 20px;
  word-wrap: break-word;
  box-sizing: border-box;

  color: #a6a8aa;
  font-size: .7em;
  font-weight: 400;
`

const DopInfo = ({cost}) => {
    return (
        <Wrapper>
            <Header>
                <DopInfoH3>
                    Дополнительная информация
                </DopInfoH3>
            </Header>
            <Content>
                <WrapperContainer>
                    <TypeExhibition>
                        <Title>
                            <big>Вид выставки</big>
                        </Title>
                        <ExhibitionDescription>
                            <span> История и личности, картины, живопись, графика</span>
                        </ExhibitionDescription>
                    </TypeExhibition>

                    <GeneralContainer style={{left: "431px", width: "431px"}}>
                        <Title>
                            <div>Цена</div>
                        </Title>
                        <EvenPriceSpan>
                            {cost}
                        </EvenPriceSpan>
                    </GeneralContainer>

                    <GeneralContainer style={{width: "431px", top: "80px", left: "431px"}}>
                        <Title>
                            <div>Сайт</div>
                        </Title>
                        <CastomNavLink to="http://localhost:3000/">
                            localhost
                        </CastomNavLink>
                    </GeneralContainer>
                    <GeneralContainer style={{top: "66px"}}>
                        <Title>
                            <TitlePhone>
                                <big>Телефон</big>
                            </TitlePhone>
                            <Info>
                                <PhoneContainer>
                                    <HeaderPhone>
                                        <div>Телефон</div>
                                    </HeaderPhone>
                                    <PhoneDescription>
                                        +7 (495) 134-59-69 <br/>
                                        <Note>
                                            Пожалуйста, скажите организаторам события, что нашли его на KudaGo
                                        </Note>
                                    </PhoneDescription>
                                </PhoneContainer>
                            </Info>
                        </Title>
                    </GeneralContainer>
                </WrapperContainer>
            </Content>
        </Wrapper>
    );
};

export default DopInfo;