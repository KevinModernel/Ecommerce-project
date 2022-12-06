const passport = require('passport')
const local = require('passport-local')
const { Users } = require('../models/user.js')
const { createHash, isValidPassword } = require('./utils.js')

const LocalStrategy = local.Strategy

const initializePassport = () => {

    passport.use(
        'register',
        new LocalStrategy(
            { usernameField: 'email', passReqToCallback: true },
            async (req, email, password, done) => {
                try {
                    console.log("\nemail: " + email + "\npassword: " + password + "\nDone: " + done);
                    let user = await Users.findOne({ email })
                    if (user) return done(null, false) // lo encontro, no registra
                    const newUser = {
                        email,
                        password: createHash(password),
                        email: req.body.email,
                        name: req.body.name,
                        address: req.body.address,
                    }
                    try {
                        let result = await Users.create(newUser) // The Model.create() method of the Mongoose API is used to create single or many documents in the collection. Mongoose by default triggers save() internally when we use the create() method on any model.
                        return done(null, result)
                    } catch(err) {
                        console.log(err);
                        done(err)
                    }
                } catch(err) {
                    console.log(err);
                    done(err)
                }
            }
        )
    )

    passport.use(
        'login',
        new LocalStrategy(
            { usernameField: 'email' },
            async(email, password, done) => {
                try {
                    let user = await Users.findOne({ email })
                    if (!user) return done(null, false)//, { message: "User does not exists"}) // no lo encontro, no existe
                    if (!isValidPassword(user, password)) return done(null, false)//, {message: "Invalid password"}) // la pw esta mal
                    return done(null, user) // todo ok vuelve el user
                } catch(err) {
                    console.log(err);
                    done(err)
                }
            }
        )
    )

    passport.serializeUser((user, done) => {
        done(null, user._id)
    })
    passport.deserializeUser((id, done) => {
        Users.findById(id, done)
    })
}

module.exports = { initializePassport }