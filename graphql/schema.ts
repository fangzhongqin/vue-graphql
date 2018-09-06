import {makeExecutableSchema} from 'graphql-tools'
import { Query }     from './types/query.ts'
import { Mutation }  from './types/mutation.ts'
import { types }     from './types.ts'
import { resolvers } from './resolvers.ts'

const schemaDefinition = `
    schema {
        query    : Query
        mutation : Mutation
    }`

const typeDefs = [
    schemaDefinition,
    Query,
    Mutation,
    ...types,
]


export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
})