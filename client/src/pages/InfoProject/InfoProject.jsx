import React from 'react';
import { observer } from "mobx-react-lite";
import main from '../../assets/main.jpg'
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';
import { createCall } from '../../http/callApi';
import { useState } from 'react';
import InputMask from "react-input-mask";
import { createQ } from '../../http/questionApi';

const InfoProject = () => {
    const [ph, setPh] = useState(null)
    const [fname, setFName] = useState('')
    const [text, setText] = useState('')
    const [email, setEmail] = useState('')
    const [errPh, setErrPh] = useState(false)

    const handleCreate = async (phone) => {
        if (`${phone}`.length < 12) {
            alert('Введите корректный номер телефона!')
        }
        await createCall(`${phone}`)
        alert('Звонок успешно заказан. В течение некоторого времени с Вами свяжется оператор!')


    
    }

    const handleQ = async () => {
        if (!fname || !text || !email ) {
            alert('Заполните поля корректно!')
        }
        await createQ(fname, text, email)
        alert('В течение некоторого времени на указанную Вами электронную почту мы отправим ответ на Ваш вопрос!')


    }

    const onHandleChange = (event) => {
        setPh(event.target.value);
    };

    return (
        <div style={{ width: '100vw', marginTop: '100px', display: 'flex' }}>
            <div style={{ textAlign: 'center', width: '50%' }}>
                <h1>Россия – не просто Лучшая страна земли - это место, где песня может «плыть», а сердце «петь»</h1>

                <img src={main} width={700} />
            </div>

            <div style={{ width: '50%', padding: '100px 40px' }}>
                <InputMask mask="+7\ (999) 999 99-99" value={ph} onChange={onHandleChange}>
                    {(inputProps) => (
                        <MyInput  {...inputProps} placeholder="Номер телефона"/>
                    )}
                </InputMask>

                <div >
                    <MyButton onClick={() => handleCreate(ph)} style={{ width: '100%' }}>Заказать звонок</MyButton>
                </div>
                <div style={{marginTop: '100px'}}>
                <MyInput value={fname} onChange={(e) => setFName(e.target.value)} placeholder="Введите ваше Имя" />
                <MyInput  value={text} onChange={(e) => setText(e.target.value)} placeholder="Вопрос"  />
                <MyInput  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"  />
                <MyButton onClick={handleQ} style={{ width: '100%' }}>Задать вопрос</MyButton>
                    </div>

    


            </div>

        </div>
    );
};

export default InfoProject;