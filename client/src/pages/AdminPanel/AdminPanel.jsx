import React from 'react';
import { observer } from "mobx-react-lite";
import CreateEx from "../Exursion/CreateExursion";
import CreateCity from "../City/CreateCity";
import DeleteCity from "../City/DeleteCity";
import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import MyButton from "../../UI/MyButton/MyButton";


const AdminStyle = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 20px;
  color: black;
  padding: 0px 18px;
  gap: 20px;
`

const AdminPanel = observer(() => {
    const router = useHistory()
    return (
        <>
            <AdminStyle>
                <div style={{ padding: '0px 40px 20px 40px', border: '5px solid black', borderRadius: '20px' }}>
                    <CreateEx />
                </div>
                <div style={{}}>
                    <div style={{padding: '0px 40px 20px 40px',border: '5px solid black', borderRadius: '20px'}}>
                    <CreateCity />
                    </div >
                    <div style={{padding: '0px 40px 20px 40px',border: '5px solid black', marginTop: '20px', borderRadius: '20px'}}>
                    <DeleteCity />
                    </div>
           
                </div>
            </AdminStyle>
        </>

    );
});

export default AdminPanel;