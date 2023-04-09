const LoginPage = require('../pages/login.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('mestoevinal@mail.ru', '123')
    });
});


