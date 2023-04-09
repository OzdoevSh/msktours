import moment from "moment"
import { useEffect, useState } from "react"
import { fetchCalls } from "../../http/callApi"
import { fetchQuestions, qChange } from "../../http/questionApi"
import './callp.css'

export default function CallPage() {

  const [callArr, setCallArr] = useState([])
  const [qArr, setQArr] = useState([])

  useEffect(async () => {
    const a = await fetchCalls()
    setCallArr(a)

    const q = await fetchQuestions()
    setQArr(q)
    console.log(q, 'q')
  }, [])

  const [tab, setTab] = useState(1)

  return (
    <>
      <h1 style={{ textAlign: 'center', fontSize: '60px' }}>
        Служба поддержки
      </h1>
      <div className="tabs">
        <div className="tabsel" onClick={() => setTab(1)} style={{background: tab === 1 && 'black', color: tab === 1 && 'white'}} >
          Звонки
        </div>
        <div className="tabsel" onClick={() => setTab(2)} style={{background: tab === 2 ? 'black' : '', color: tab === 2 ? 'white': ''}}>
          Вопросы
        </div>
      </div>

      {tab === 1 ? 
      <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Номер телефона</th>
          <th>Дата</th>
          <th>Время</th>
          {/* <th>Статус</th> */}
        </tr>
      </thead>
      <tbody>
        {callArr?.sort((a, b) => b.id - a.id).map((b) => (

          <tr>
            <td>{b.id}</td>
            <td>{b.phone}</td>
            <td>{moment(b.createdAt).format('DD/MM/YYYY')}</td>
            <td>{moment(b.createdAt).format('HH:MM')}</td>
            {/* <td>
          
          <div className="switcher">
            <div className="yes" style={{background: b.status === true ? 'black' : 'white', color: b.status === true ? 'white' : 'black'}}>
              Выполнено
            </div>
            <div className="no" style={{background: b.status === false ? 'black' : 'white', color: b.status === false ? 'white' : 'black'}}>
              Не выполнено
            </div>
            </div>
            <div className="btnbthh" onClick={() => qChange(b.id, b.status)}  style={{cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', height: '40px', width: '242px', background: 'red'}}>Поменять</div>
            </td> */}
          </tr>
        )
        )}


      </tbody>
    </table> :
    <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Имя</th>
        <th>Email</th>
        <th>Дата</th>
        <th>Вопрос</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      {qArr?.sort((a, b) => b.id - a.id).map((b) => (

        <tr>
          <td>{b.id}</td>
          <td>{b.fname || 'Иван'}</td>
          <td>{b.email}</td>
          <td>{moment(b.createdAt).format('DD/MM/YYYY')}</td>
          <td>{b.text}</td>
          <td>
          
          <div className="switcher">
            <div className="yes" style={{background: b.status === true ? 'black' : 'white', color: b.status === true ? 'white' : 'black'}} 
            >
              Выполнено
            </div>
            <div className="no" style={{background: b.status === false ? 'black' : 'white', color: b.status === false ? 'white' : 'black'}}>
              Не выполнено
            </div>
       
            </div>     <div className="btnbthh" onClick={() => qChange(b.id, b.status)}  style={{ cursor: 'pointer',  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40px', width: '242px',  color: 'white', background: 'red'}}>Поменять</div></td>
        </tr>
      )
      )}


    </tbody>
  </table>
    }
      
    </>

  )
}