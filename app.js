import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import bodyParser from 'koa-bodyparser'
const { ApolloServer, gql } = require('apollo-server-koa');
const { makeExecutableSchema } = require('apollo-server-koa');
const port = 4000
import {schema} from './graphql/schema.ts'

// import {database} from './mongodb/index.ts'
require('./mongodb/index.ts')
console.log('ApolloServer', ApolloServer, makeExecutableSchema)
// database()
const GraphqlRouter = require('./router/index.ts')

console.log('graphql', GraphqlRouter)
const app = new Koa()
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.use('', GraphqlRouter.routes())

app.use(router.routes())
   .use(router.allowedMethods());

const server = new ApolloServer({schema});
 
// server.applyMiddleware({ app });
 
const path = '/fzqgraphql';

server.applyMiddleware({ app, path });

app.listen(port)
