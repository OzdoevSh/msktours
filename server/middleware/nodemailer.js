const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'mestoevinal@mail.ru',
            pass: 'CfgUaKPi0v5vnyFrmy7h',
        },

    },
    {
        from: "Экскурсии! <mestoevinal@mail.ru>"
    }
)

const mailer = message => {
    transporter.sendMail(message, (err, info) =>{
        if(err) return console.log(err)
        console.log("Email sent: ", info )
    })
}

module.exports = mailer
