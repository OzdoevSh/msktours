import React, {createContext} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import UserStore from "./store/UserStore"
import CityStore from "./store/CityStore"

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        cityStore: new CityStore()
    }}>
        <App/>
    </Context.Provider>
    , document.getElementById('root')
)
