const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () {
        return $('#username-input');
    }

    get inputEmail () {
        return $('#input-email-registr');
    }

    get inputPassword () {
        return $('#input-password-login');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    async login (email, password) {
        try {
            await this.open()
            await this.inputEmail.setValue(email);
            await this.inputPassword.setValue(password);
            await this.btnSubmit.click();
        } catch (e){
            throw new Error('Не удалось авторизоваться')
        }

    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
