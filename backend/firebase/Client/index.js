const firebase = require('firebase')
const config = require('../config')


const app = firebase.initializeApp(firebaseConfig)
const clientAuth = firebase.getAuth(app)

module.exports =  clientAuth 