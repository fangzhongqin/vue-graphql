// import mongoose from 'mongoose'
const mongoose = require('mongoose')
// import {InfoSchema} from '../../mongodb/schema/info.ts'
const Info = require('../../mongodb/schema/info.ts')

// mongoose.model('Info', InfoSchema)
// import { schema } from '../schema';

console.log('---------Info--------', Info)

export const infoResolver = {
    info: (_, {_id}) => {
        console.log('params', _id, Info)
        return Info.findOne({
                _id
            }).exec()
    }
}