import React from 'react';
import styled from 'styled-components'
import tg from '../../assets/icons/tg.svg'
import ww from '../../assets/icons/ww.svg'
import vk from '../../assets/icons/vk.svg'
import fb from '../../assets/icons/fb.svg'

const foot = styled.div` 
  background-color: #ECE8F7;
  flex: 0 0 auto;
  width: 100%;
  color:black;
  border-top: 1px solid black;
  height: 50px;
  mix-blend-mode: multiply;  
`

const Footer = (props) => {
    return (
        <div style={{height: '400px', borderTop: '4px solid black',borderBottom: '4px solid black', background:'#cfd1d4', color: 'white', marginTop: '120px', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', rowGap: '16px'}}>
             <h2 style={{color: 'black'}}>Где нас найти?</h2>
            <div style={{display: 'flex', gap: '12px', }}>
               
            <a href="https://web.telegram.org/z/" target="_blank"><img src={tg} width={50} style={{cursor: 'pointer'}}/></a>
            <a href="https://www.whatsapp.com/?lang=ru" target="_blank"><img src={ww} width={50} style={{cursor: 'pointer'}}/></a>
            <a href="https://vk.com/feed" target="_blank"><img src={vk} width={50} style={{cursor: 'pointer'}}/></a>
            <a href="https:/facebook.com" target="_blank"><img src={fb} width={50} style={{cursor: 'pointer'}}/></a>
            </div>
            <div style={{color: 'black'}}>
                +7 (999) 999 9090
            </div>
            <div style={{color: 'black'}}>
                bookexc@mail.ru
            </div>
            <div>
            <a href="../../assets/politics.pdf" style={{textDecoration: 'none'}} download ><h3 style={{color: 'black'}}>Политика конфедицеальности</h3></a> 
            </div>
            <div>
                <h4  style={{color: 'black'}}>Все права защищены. By Islam "The Igor" Evloev</h4>
            </div>

        </div>
    )
}

export default Footer;
