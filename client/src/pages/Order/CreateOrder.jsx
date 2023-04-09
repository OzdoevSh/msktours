import React, {useContext} from 'react';
import {createOrder} from "../../http/orderAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import useInput from "../../hooks/useInput";
import MyButton from "../../UI/MyButton/MyButton";
import MyInput from "../../UI/MyInput/MyInput";
import styled from "styled-components"
import {useHistory} from "react-router-dom";

const MailDiv = styled.div`
  color: red;
`

const CreateOrder = (props) => {
    const {user} = useContext(Context)
    const history = useHistory()
    const email = useInput('', {isEmpty: true, minLength: 3, emailError: true})
    const fullDescription = useInput('', {isEmpty: true, minLength: 6})

    const orderExur = async (e) => {
        e.preventDefault()
        await createOrder({userId: user.User.id, exursionId: props.exursionId})
            .then(data => {
                alert("Ваш заказ успешно оформлен")
                history.push('/CityList')
            })
    }

    return (
        <form>
            <div>Введите ваш email</div>
            {(email.isDirty && email.isEmpty) && <MailDiv>{email.errorMessage}</MailDiv>}
            <MyInput
                type="text"
                value={email.value}
                onChange={e => email.onChange(e)}
                onBlur={e => email.onBlur(e)}
            />
            {(fullDescription.isDirty && fullDescription.isEmpty) &&
                <MailDiv style={{color: "red"}}>{fullDescription.errorMessage}</MailDiv>}
            <div>Введите ФИО</div>
            <MyInput
                type="text"
                value={fullDescription.value}
                onChange={e => fullDescription.onChange(e)}
                onBlur={e => fullDescription.onBlur(e)}
            />

            <MyButton
                disabled={!email.inputValid || !fullDescription.inputValid} onClick={orderExur}
            >
                Записаться
            </MyButton>
        </form>
    )
}

export default CreateOrder;