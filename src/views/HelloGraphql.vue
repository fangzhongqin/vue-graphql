<template>
  <div class="graphql">
    <h1>{{message}}</h1>
  </div>
</template>
<script>
import axios from 'axios'
// import search from '../graphql/search.js'
import gql from 'graphql-tag'

export default {
    data() {
        return {
            message: ''
        }
    },
    created() {
        const testSearch = gql`query{
            posts{
                id,
            },
            author(id: 1) {
                id,
                firstName
            },
            student {
                _id,
                name,
                age,
                sex
            }
            info(_id:"5349b4ddd2781d08c09890f3") {
                _id,
                height
            }
        }`
        this.$apollo.query({
            query: testSearch
        })
        .then(res => {
            console.log(res)
            this.message = res.data.author.firstName
        })
    },
    methods: {

    }
}
</script>

