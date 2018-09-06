// import mongoose from 'mongoose'
const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const InfoSchema = new Schema({
    hobby: [String],
    height: String,
    weight: Number,
    meta: {
        createdAt: {
            type: Date,
            default: Date.now()
        },
        updatedAt: {
            type: Date,
            default: Date.now()
        }
    }
})

InfoSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createdAt = this.meta.updatedAt = Date.now()
    } else {
        this.meta.updatedAt = Date.now()
    }

    next()
})
console.log('0-0-0-0-')

const Info = mongoose.model('Info', InfoSchema)

module.exports = Info