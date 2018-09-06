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
        
        axios.get('/info')
        .then(res => {
            console.log(res)
            this.message = res.data.author.firstName
        })
    },
    methods: {

    }
}
</script>

