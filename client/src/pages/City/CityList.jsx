import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {fetchCity} from "../../http/cityAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {check} from "../../http/userAPI";

const GeoImg = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: -40px;
`
const ImageText = styled.div`
border: 2px solid black;
  width: 575px;
  height: 600px;
  border-radius: 5px;
  margin: 5px 0px 0px 5px;
  @media (max-width: 800px) {
    width: 400px;
    height: 400px;
  }
  cursor: pointer;
  background: linear-gradient(rgba(255, 255, 255, 0.1),
  rgba(0, 0, 0, 0.7)), url(${props => props.imgurl || ""}) center / cover no-repeat;
`

const TextStyle = styled.div`
  :hover {
    filter: brightness(80%);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  font-size: 36px;
  text-decoration: none;
`

const CityList = observer(() => {
    const {cityStore} = useContext(Context)
    const {user} = useContext(Context)
    const router = useHistory()
    useEffect(() => {
        fetchCity().then(data => cityStore.setCity(data))
        check().then(data => {
            user.setRole(data.role)
            user.setUser(data)
        })
    }, [])

    const history = useHistory()

    useEffect(() => {
      user.User.role === "CALL" && history.push('/CallCentre') ;
    }, [])

    return (<>
            <div style={{textAlign: 'center', fontSize: '50px', marginTop: '50px'}}>Наши города</div>
            <GeoImg>
            {cityStore.ArrayCity.map(city =>
                <div key={city.id} style={{marginTop: '100px'}}>
                    {city.img ?
                        <ImageText
                            key={city.id}
                            imgurl={process.env.REACT_APP_API_URL + city.img}
                            onClick={() => router.push(`/CityList/${city.id}`)}
                        >
                            <TextStyle>{city.name}</TextStyle>
                        </ImageText>
                        :
                        <ImageText
                            key={city.id}
                            onClick={() => router.push(`/CityList/${city.id}`)}
                        >
                            <TextStyle>{city.name}</TextStyle>
                        </ImageText>
                    }
                </div>
            )}
        </GeoImg>
    </>

    )
})

export default CityList;