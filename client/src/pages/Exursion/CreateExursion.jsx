import React, {useRef, useContext, useEffect, useState} from 'react';
import MyInput from "../../UI/MyInput/MyInput";
import {observer} from "mobx-react-lite";
import {createExursion} from "../../http/exursionAPI";
import {fetchCity} from "../../http/cityAPI";
import styled from "styled-components";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {Context} from "../../index";
import {YMaps, Map} from "react-yandex-maps";
import useInput from "../../hooks/useInput";
import MyButton from "../../UI/MyButton/MyButton";
import MySelect from "../../UI/select/MySelect";
import {useHistory} from "react-router-dom";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  > input {
    margin-top: 5px;
  }

  > textarea {
    margin-top: 5px;
  }

  :nth-child(MyDatePicker) {
    margin-top: 40px;
  }
`

const TextArea = styled.textarea`
  box-sizing: border-box;

  font-size: 16px;
  width: 100%;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 10px;
  color: black;
  height: 190px;
  padding: 10px 20px;
  border: 2px solid #0561a3;
  margin-bottom: 20px;
`
const MyDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  width: 100%;
  background-color: #e6e6e6;
  border: 1px solid transparent;
  border-radius: 10px;
  color: gray;
  font-size: 18px;
  height: 60px;
  padding: 0px 20px;
  margin-top: 5px;
  border: 2px solid #0561a3;
  margin-bottom: 20px;
`

const CreateEx = observer(() => {
    const [startDate, setStartDate] = useState(new Date())
    const {cityStore} = useContext(Context)
    const addressInput = useRef()
    const name = useInput('', {isEmpty: true, minLength: 2})
    const fullDescription = useInput('', {isEmpty: true, minLength: 2})
    const description = useInput('', {isEmpty: true, minLength: 2})
    const cost = useInput(0, {numberMin: 1})
    const [file, setFile] = useState(0)
    const loadSuggest = ymaps => { const suggestView = new ymaps.SuggestView("suggest") }
    const selectFile = e => setFile(e.target.files[0])
    useEffect(() => {fetchCity().then(data => cityStore.setCity(data))},[])
    const [cityId, setCityId] = useState(cityStore.ArrayCity[0] ? cityStore.ArrayCity[0].id : 10)
    const history = useHistory()

    const addExur = async (en) => {
        try {
            en.preventDefault()
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('cost', cost.value)
            formData.append('cityId', cityId)
            formData.append('fullDescription', fullDescription.value)
            formData.append('date', startDate)
            formData.append('description', description.value)
            formData.append('address', addressInput.current.value)
            formData.append('img', file)
            createExursion(formData)
                .then(() => {
                    setStartDate("")
                    setCityId(1)
                    setFile(0)
                    alert("Экскурсия успешно создана")
                    history.push('/CityList')
                })
        } catch (err) {
            alert(err + " заполните корректно поля")
        }
    }

    return (
        <div>
            <Form>
                <h3>Добавить экскурсию</h3>

                <TextArea
                    value={name.value}
                    onChange={e => name.onChange(e)}
                    onBlur={e => name.onBlur(e)}
                    placeholder="Введите заголовок"
                />

                <TextArea
                    value={description.value}
                    onChange={e => description.onChange(e)}
                    onBlur={e => description.onBlur(e)}
                    type={"text"}
                    placeholder="Большой заголовок"
                />

                <MyInput
                    value={fullDescription.value}
                    onChange={e => fullDescription.onChange(e)}
                    onBlur={e => fullDescription.onBlur(e)}
                    type={"text"}
                    placeholder="Полное описание"
                />
                <div style={{marginBottom: '20px'}}>
                <YMaps>
                <MyInput
                        style={{marginTop: "5px"}}
                        id="suggest"
                        ref={addressInput}
                        placeholder="Адрес экскурсии"
                    />
                    <Map
                        onLoad={ymaps => loadSuggest(ymaps)}
                        defaultState={{center: [55.751574, 37.573856], zoom: 9}}
                        modules={["SuggestView"]}
                    />
                </YMaps>


                </div>

                <div>Стоимость</div>
                <MyInput
                    type={"number"}
                    value={cost.value}
                    onChange={e => cost.onChange(e)}
                    onBlur={e => cost.onBlur(e)}
                />
                <div>Выберите дату</div>
                <MyDatePicker
                    selected={startDate}
                    onChange={ date => setStartDate(date)}
                    minDate={new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={30}
                />
   <div>Город</div>
<MySelect
                    key = {cityId}
                    value={cityId}
                    onChange={city => setCityId(city)}
                    defaultValue="В каком городе хотите добавить экскурсию?"
                    options={cityStore.ArrayCity}
                    
                />

                <MyInput
                    type={"file"}
                    placeholder={"Выберите файл"}
                    onChange={selectFile}
                />
                <MyButton
                    disabled={!name.inputValid && !cost.inputValid && !description.inputValid}
                    onClick={addExur}
                >
                    Добавить экскурсию
                </MyButton>
            </Form>
        </div>
    );
});

export default CreateEx;