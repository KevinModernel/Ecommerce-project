const { createTransport } = require('nodemailer');

const TEST_MAIL = process.env.ADMINMAIL;

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'keyshawn.barrows75@ethereal.email',
        pass: 'xR2xTqGRCSxmV1hFX3'
    }
});

module.exports = function (subject, html) {
    const mailOptions = {
        from: 'Servidor Node.js',
        to: TEST_MAIL,
        subject: subject,
        html: html
    }

    try {
        const info =  transporter.sendMail(mailOptions)
    } catch (error) {
        console.log(`ERROR: ${error}`)
    }
};