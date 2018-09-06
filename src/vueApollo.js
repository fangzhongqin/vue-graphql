// import ApolloClient from 'apollo-client'
// import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
// import { onError } from 'apollo-link-error'
// import { ApolloLink, from } from 'apollo-link'

// const token = '598ffa46592d1c7f57ccf8173e47290c6db0d549'

// const Middleware = new ApolloLink((operation, forward) => {
//   // request时对请求进行处理
//   console.log('Middleware', operation, forward)
// })
// const Afterware = new ApolloLink((operation, forward) => {
//   return forward(operation).map(response => {
//     // 服务器返回数据
//     console.log('Afterware--response', response)
//     return response
//   })
// })
// const errorLink = onError(({ graphQLErrors, networkError }) => {
//   if (graphQLErrors)
//     graphQLErrors.map(({ message, locations, path }) =>
//       console.log(
//         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
//       ),
//     );
//   if (networkError) console.log(`[Network error]: ${networkError}`);
// });

// const httpLink = new HttpLink({
//   uri: 'https://api.github.com/graphql', // 配置请求url 
//   headers: {                             // 配置header
//     Authorization: `Bearer ${token}`
//   }
// })
// const cache = new InMemoryCache()       // 缓存
// export default new ApolloClient({
//   link: from([Middleware, Afterware, errorLink, httpLink]),
//   cache
// })


import Vue from 'vue'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/graphql',
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

// Install the vue plugin
Vue.use(VueApollo)