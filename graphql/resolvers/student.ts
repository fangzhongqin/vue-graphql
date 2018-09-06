// import mongoose from 'mongoose'
const mongoose = require('mongoose')
// import {Student} from '../../mongodb/schema/student.ts'

const Student = require('../../mongodb/schema/student.ts')
console.log('student', Student)

export const studentResolver = {
    student: () => {
        console.log('student', Student)
        return Student.find({}).populate({
            path: 'info',
            select: 'hobby height weight'
        }).exec()
    }
}