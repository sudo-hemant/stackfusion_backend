const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS
    }
});

function sendMail(to, subject, html) {
    const mailOption = {
        from: process.env.SENDER_EMAIL,
        to,
        subject,
        html: html
    }

    transporter.sendMail(mailOption, (err, info) => {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    })
}

module.exports = {
    sendMail
}