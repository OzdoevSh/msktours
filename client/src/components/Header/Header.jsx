import React, {useContext} from 'react';
import styled from 'styled-components'
import {NavLink, useHistory} from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {GiHamburgerMenu} from "react-icons/gi";
import './Header.css'

const HeaderStyle = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  font-size: 24px;
`
const NavItem = styled.div`
  display: inline-flex;
  justify-content: ${props => props.justify || "flex-start"};
  align-items: center;
`

const Nav = styled(NavLink)`
  white-space: nowrap;
  color: black;
  padding: 40px 25px;
  text-decoration: none;
  font-weight: bold;
  margin-left: ${props => props.size || "0px"};
  :hover {
    color: #black;
    text-decoration: underline;
  }
  @media (max-width: 800px) {
    display: none;
  }
  transition: 0.3s
`

const Icon = styled(GiHamburgerMenu)`
  display: none;
  @media (max-width: 800px) {
    display: inline;
    width: 30px;
    border-radius: 30px;
    margin: 0px 10px 0px 0px;
    height: 55px;
  }
`

const LogoImg = styled.img`
  margin-right: 40px;
  margin-left: 20px;
  width: 200px;
  height: 55px;
  mix-blend-mode: multiply;
`

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
`

const Header = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()
    let logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.clear()
        history.push('/login')
    }
    return (
        <HeaderStyle>
            <WrapperHeader>
              {user.User.role === 'CALL' ? 
               <NavItem justify="flex-end" style={{marginLeft: '1400px'}}>
               <Nav to="" onClick={() => logOut()}>
                   Выйти
               </Nav>
               <Icon/>
           </NavItem>
              : <>
              <NavItem>
                    {/*<LogoImg src={logo2} alt={"logo"}></LogoImg>*/}
                    <Nav to="/InfoProject">Главная</Nav>
                    <Nav to="/CityList"> Список экскурсий</Nav>
                    {user.User.role === "ADMIN" ?
                    <>
                         <Nav to="/allOrder">
                            Заказы
                        </Nav>
                        <Nav to="/AdminPanel"
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')}
                        >Админ Панель</Nav>
                    </>
                
                        : user.isAuth &&
                        <Nav to="/allOrder">
                            Мои заказы
                        </Nav>
                    }
                </NavItem>
                {!user.isAuth ?
                    <NavItem justify="flex-end">
                        <Nav to="/login">Вход</Nav>
                        <Nav to="/registration" size="-15px">Регистрация</Nav>
                        <Icon/>
                    </NavItem>
                    :
                    <NavItem justify="flex-end">
                        <Nav to="" onClick={() => logOut()}>
                            Выйти
                        </Nav>
                        <Icon/>
                    </NavItem>}
              </>
            }
                
                
            </WrapperHeader>
        </HeaderStyle>
    )
})

export default Header;

