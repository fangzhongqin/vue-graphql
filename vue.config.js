module.exports = {
    devServer: {
        proxy: {
            '/api':{
                target: 'http://localhost:4000/fzqgraphql',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/info':{
                target: 'http://localhost:4000/info',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/info': ''
                }
            }
        }   
    },
    // chainWebpack: config => {
    //     config.module       // webpackChain 提供的添加 loader 方法
    //       .rule('/\.(graphql|gql)$/')
    //       .exclude.add('/node_modules/').end()
    //         .use('graphql-tag/loader')
    //         .loader('graphql-tag/loader')
    //         .end()
    //   }
}