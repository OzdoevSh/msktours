import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";
import {activateAccount} from "../../http/userAPI";

const Verify = () => {
    const param = useParams()
    useEffect(()=>{
        activateAccount(param.id)
    },[])
    return (
        <div>
            <h1>Подтверждение выполнено успешно!</h1>
        </div>
    );
};

export default Verify;