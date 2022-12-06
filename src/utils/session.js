const session = require('express-session')
const MongoStore = require('connect-mongo')

const baseSession = session({
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://mongodbuser:mongo123@cluster0.kp6gl82.mongodb.net/?retryWrites=true&w=majority'}),
    mongoOptions: {        useNewUrlParser: true,        useUnifiedTopology: true,    },
    secret: 'f1n4lc0d3r',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600_000 }
})

module.exports = baseSession