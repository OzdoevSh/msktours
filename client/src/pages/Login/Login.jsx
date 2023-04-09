import React, {useContext} from 'react';
import {Context} from "../../index";
import {useHistory, useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../../utils/consts";
import useInput from "../../hooks/useInput";
import Button from "react-bootstrap/Button";
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import styled from 'styled-components'
import * as uuid from "uuid";


const CastomInput = styled.input`
  box-sizing: border-box;
  width: 80%;
  background-color: white;
  border: 3px solid black;
  border-radius: 10px;
  color: black;
  font-size: 15px;
  height: 80px;
  padding: 0px 20px;
  outline: none;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  width: 800px;
  height: 400px;
  padding-top: 80px;
  padding-bottom: 60px;
  border: 5px solid black;
  border-radius: 30px;
  background-color: white;
`
const Title = styled.div`
  font-size: 47px;
  font-weight: 100;
  padding-bottom: 35px;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
`
const CastomButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  outline: none !important;
  border: none;
  margin-top: 0px;
  width: 80%;
  height: 100px;
  background-color: black;
  border-radius: 10px;
  font-size: 25px;
  margin-top: 30px;
  :hover {
    filter: brightness(0.7);
  }
`
const ErrorText = styled.div`
  margin-bottom: 10px;
`

const Login = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const email = useInput('', {isEmpty: true, emailError: true})
    const username = useInput('', {isEmpty: true, maxLength: 100})
    const password = useInput('', {isEmpty: true, minLength: 4})

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email.value, password.value)
            } else {
                data = await registration(email.value, password.value, username.value, uuid.v1())
            }
            user.setUser(data)
            user.setIsAuth(true)
            email.value = ""
            password.value = ""
            username.value = ""
            history.push('/CityList')
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Form>
            <Title>{isLogin ? 'АВТОРИЗАЦИЯ' : "РЕГИСТРАЦИЯ"}</Title>
            {!isLogin &&
                <CastomInput
                    type="text"
                    placeholder="Имя пользователя"
                    onChange={e => username.onChange(e)}
                    onBlur={e => {
                        username.onBlur(e)
                    }}
                    style={{marginBottom: "17px"}}
                />
            }
            <CastomInput
                type="text"
                placeholder="Электронная почта"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => {
                    email.onBlur(e)
                }}
            />
            <ErrorText>{(email.isDirty && email.isEmpty) &&
                <div style={{color: "red"}}>{email.errorMessage}</div>}</ErrorText>

            <CastomInput
                placeholder="Пароль"
                type="password"
                value={password.value}
                onChange={e => password.onChange(e)}
                onBlur={e => password.onBlur(e)}
            />
            <ErrorText>{(password.isDirty && password.isEmpty) &&
                <div style={{color: "red"}}>{password.errorMessage}</div>}
            </ErrorText>

            <CastomButton
                variant={"outline-success"}
                onClick={click}
            >
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </CastomButton>
        </Form>
            </div>

    )
})

export default Login