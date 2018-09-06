export const Post = `type Post {
    id: Int!
    title: String
    author(id: Int!): Author
    votes: Int
}`