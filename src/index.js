import express from 'express';
import server from './server'



const app = express()

const POST = 8080

server.applyMiddleware({ app });

app.listen({ port: POST }, () =>
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`)
)
