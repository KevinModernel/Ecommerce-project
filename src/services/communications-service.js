const sendmail = require('../utils/nodemailer')

const deliverMail = async (title, body) => {
    try {
        sendmail(title, body)
    } catch (error) {
        logger.loggerError.error(`ERROR: ${error}`)
    }
};

module.exports = { deliverMail }