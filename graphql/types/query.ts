export const Query = 
    `type Query {
        posts: [Post]
        author(id: Int!): Author
        infos: [Info]
        info(_id: ID!): Info
        student: [Student]
    }`