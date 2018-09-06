// import mongoose from 'mongoose'
import config from '../config/index.ts'
const mongoose = require('mongoose')
console.log('config', config, mongoose)

require('./schema/info.ts')
require('./schema/student.ts')
require('./schema/course.ts')

let db = mongoose.createConnection('mongodb://localhost/graphql')
const database = () => {
    mongoose.set('debug', true)

    mongoose.connect(config.dbPath)

    mongoose.connection.on('disconnected', () => {
        mongoose.connect(config.dbPath)
    })
    mongoose.connection.on('error', err => {
        console.error('error', err)
    })

    mongoose.connection.on('open', () => {
        console.log('Connected to MongoDB ', config.dbPath)
    })
}

database()