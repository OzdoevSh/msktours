import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {deleteOrder, fetchMyOrder, fetchOrder} from "../../http/orderAPI";
import {observer} from "mobx-react-lite";
import styled from "styled-components"
import MyButton from "../../UI/MyButton/MyButton";
import OrderCard from "./OrderCard";

const OrderStyle = styled.div`
  width: 1180px;
  padding: 15px;
  font-size: 23px;
  margin-top: 15px;
`

const Div = styled.div`

  font-size: 15px;
  color: #2f3235;
`

const OrderList = observer(() => {
    const {user} = useContext(Context)
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        if (user.Role == "ADMIN") {
            fetchOrder().then(data => setOrderList(data))
        }
        else {
            fetchMyOrder(user.User.id).then(data => setOrderList(data))
        }
    }, [])


    return (
        <div>
            {orderList.map((order, i) =>
                    <OrderStyle>
                        <OrderCard style={{border: '5px solid black'}} order={order} exid={order.exursionId} key={order.id} />
                        <button
                            style={{marginTop: "10px", padding: '8px 16px', cursor: 'pointer', color: 'white', background: 'red', border: 'none'}}
                            onClick={async () => await deleteOrder(order.id)}
                        >
                            Отменить заказ
                        </button>
                        <div style={{borderBottom:'5px solid black', width: '98vw', marginTop: '6px'}}></div>
                    </OrderStyle>
            )}
        </div>
    );
});

export default OrderList;