import {authorResolver} from './resolvers/author.ts'
import {postResolver} from './resolvers/posts.ts'
import {find, filter} from 'lodash'
// import mongoose from 'mongoose'
const mongoose = require('mongoose')
import {upvotePostMutation} from './mutations/upvotePost.ts'
import {infoResolver} from './resolvers/info.ts'
import {infosResolver} from './resolvers/infos.ts'
import {studentResolver} from './resolvers/student.ts'
// import {Info} from '../mongodb/schema/info.ts'
const Info = require('../mongodb/schema/info.ts')

export const resolvers = {
    Query: {
        // posts: () => posts,
        // author: (_, { id }) => find(authors, { id }),
        ...authorResolver,
        ...postResolver,
        ...studentResolver,
        infos: () => {
            console.log('0-0-0-0-0')
            return Info.find({}).exec()
        },
        ...infoResolver
    }, 
    Mutation: {
        ...upvotePostMutation
    }
}

