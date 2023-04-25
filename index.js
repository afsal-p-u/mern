const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const colors = require('colors')

require('dotenv').config()

const connectDB = require('./config/db')
const schema = require('./schema/schema.js')

connectDB()
const port = process.env.PORT || 8080

const app = express()

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(port, console.log('Server is running on port: ', port))