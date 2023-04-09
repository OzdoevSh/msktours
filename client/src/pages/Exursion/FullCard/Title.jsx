import React, {useContext, useState} from 'react';
import styled from "styled-components";
import MyButton from "../../../UI/MyButton/MyButton";
import {useHistory} from "react-router-dom";
import {createOrder} from "../../../http/orderAPI";
import {Context} from "../../../index";

const Wrapper = styled.div`
  box-sizing: border-box;
  font-size: 20px;
   
  height: auto;
  font-weight: 400;
  color: #2f3235;
  padding-left: 100px;
`
const MyTitle = styled.div`
  font-size: 20px;
  color: #2f3235;
  box-sizing: border-box;
`
const P = styled.p`
  font-size: 20px;
   
  font-weight: 400;
  color: #2f3235;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 5px;
  width: 700px;
`
const Button = styled(MyButton)`
  background: #black;
  width: 890px;
  
  :hover {
    filter: brightness(0.6);
  }
`

const Title = ({title, exursionId}) => {
    const history = useHistory()
    const {user} = useContext(Context)

    const orderExur = async (e) => {
        e.preventDefault()
        await createOrder({
            email: user.User.email,
            userId: user.User.id,
            exursionId: exursionId,
            username: user.User.username
        })
            .then(() => {
                alert("Ваш заказ успешно оформлен")
                history.push("/CityList")
            })
    }
    return (
        <Wrapper>
            <MyTitle>
                <P>
                    {title}
                </P>
            </MyTitle>
            <Button
                onClick={orderExur}
            >
                Забронировать
            </Button>
        </Wrapper>
    );
};

export default Title;