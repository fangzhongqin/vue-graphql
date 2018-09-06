// import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa'
import {saveInfo, fetchInfo} from '../controllers/info.ts'
import {saveStudent, fetchStudent, fetchStudentDetail} from '../controllers/student.ts'
import { saveCourse, fetchCourse } from '../controllers/course.ts'

// import schema from '../graphql/schema'


const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
      .get('/info', fetchInfo)
      .post('/savestudent', saveStudent)
      .get('/student', fetchStudent)
      .get('/studentDetail', fetchStudentDetail)
      .post('/savescourse', saveCourse)
      .get('/course', fetchCourse)


// router.post('/graphql', async (ctx, next) => {
//         await graphqlKoa({schema: schema})(ctx, next)
//       })
//       .get('/graphql', async (ctx, next) => {
//         await graphqlKoa({schema: schema})(ctx, next)
//       })
//       .get('/graphiql', async (ctx, next) => {
//         await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
//       })

module.exports = router
