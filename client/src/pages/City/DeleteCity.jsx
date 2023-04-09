import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {deleteExursion, fetchCity} from "../../http/cityAPI";
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css'
import {Context} from "../../index";
import MyButton from "../../UI/MyButton/MyButton";
import MySelect from "../../UI/select/MySelect";
import {useHistory} from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;  
`

const DeleteCity = observer( () => {
    const {cityStore} = useContext(Context)
    const history = useHistory()
    const [cityId, setcityId] = useState(cityStore.ArrayCity[0] ? cityStore.ArrayCity[0].id : 0)

    useEffect(() => {
        fetchCity().then(data => cityStore.setCity(data))
    }, [])

    const delExur = async (e) => {
        e.preventDefault()
        deleteExursion(cityId)
        alert("Город успешно удален")
        history.push('/CityList')
    }

    return (
        <div>
            <Form>
                <h3>Удалить город экскурсий</h3>
                <MySelect
                    value={cityId}
                    onChange={city => setcityId(city)}
                    defaultValue="В каком городе хотите добавить экскурсию?"
                    options={cityStore.ArrayCity}
                />
                <MyButton
                    onClick={delExur}
                    style={{background: 'red'}}
                >
                    Удалить город
                </MyButton>
            </Form>
        </div>
    );
});

export default DeleteCity;