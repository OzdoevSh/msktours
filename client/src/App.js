import React, {useContext, useEffect} from 'react';
import Header from './components/Header/Header';
import {BrowserRouter} from "react-router-dom";
import styled from "styled-components";
import AppRouter from "./components/AppRouter/appRouter";
import {check} from "./http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import Footer from './components/Footer/footer';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
`


const App = observer(() => {
    const {user} = useContext(Context)
    useEffect(() => {
        check().then((data) => {
            if (data) {
                user.setIsAuth(true)
                user.setUser(data)
            }
        })
    }, [user.isAuth])

    return (
        <BrowserRouter>
            <AppWrapper>
                <Header/>
                <Content>
                    <AppRouter/>
                </Content>
                <Footer/>
            </AppWrapper>
        </BrowserRouter>
    )
})
export default App;