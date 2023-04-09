import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {
            role: ""
        }
        this._role = ""
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    setRole(role) {
        this._role = role
    }


    get isAuth() {
        return this._isAuth
    }
    get Role() {
        return this._role
    }

    get User() {
        return this._user
    }
}
