import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {useParams} from "react-router-dom"
import {fetchExursioncityId} from "../../http/exursionAPI"
import Card from "./Card"

const StyleExur = styled.div`

`

const ExListСss = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 15px;
  gap: 30px;
  padding: 0px 30px;
`

const ExursionList = () => {
    const [ExurList, setExurList] = useState([])
    const params = useParams()
    useEffect(() => {
        fetchExursioncityId(params.id)
            .then(data => setExurList(data))
    }, [])

    return (
        <>
        <div style={{textAlign: 'center', fontSize: '50px', marginTop: '50px'}}>Список экскурсий</div>
                <StyleExur>
            <ExListСss>
                {ExurList.map((exur,i) =>
                    <Card
                        key={i}
                        ex={exur}
                    />
                )}
            </ExListСss>

        </StyleExur>
        </>

    )
}

export default ExursionList