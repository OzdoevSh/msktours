import React from 'react';
import styled from 'styled-components'
import {observer} from "mobx-react-lite";
import DopInfo from "./DopInfo";
import Reviews from "../../Review/Reviews";
import Content from "./Content";
import Title from "./Title";
import Time from "./Time";
import {useLocation} from "react-router-dom/cjs/react-router-dom";

const H1 = styled.h1`
  box-sizing: border-box;
  line-height: 40px;
  font-size: 40px;
  padding: 0 40px;
  color: black;
  font-family: RobotoSlabMedium, Georgia, Times New Roman, Times, sans-serif;
  width: 950px;
  margin: 40px auto 6px;
`

const Wrapper = styled.div`
  width: 1080px;
`
const SwiperImg = styled.div`
  margin: 20px auto;
  width: 900px;
  height: 500px;
  background: url(${props => props.imgurl || ""}) center/ cover no-repeat;
  background-size: 900px 600px;
`

const Exursion = observer(() => {
    const location = useLocation()
    return (
        <Wrapper>
            <H1>{location.state.name}</H1>
            <Title  title={location.state.description} exursionId={location.state.id}/>
            <SwiperImg imgurl={process.env.REACT_APP_API_URL + location.state.img}/>
            <div style={{paddingLeft: '100px'}}> 
            <Content fullDescription={location.state.fullDescription}/>
            <Time date={location.state.date}/>
            <DopInfo cost={location.state.cost}/>
            <Reviews title={location.state.name} id={location.state.id}/>
            </div>

        </Wrapper>
    );
});

export default Exursion;