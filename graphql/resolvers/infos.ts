// import mongoose from 'mongoose'
const mongoose = require('mongoose')
// const Info = mongoose.model('Info')
// import {Info} from '../../mongodb/schema/info.ts'
const Info = require('../../mongodb/schema/info.ts')
console.log('Info', Info)

export const InfosResolver = {
    infos: () => {
        console.log('0-0-0-0-0')
        return Info.find({}).exec()
    }
}