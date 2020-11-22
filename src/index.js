
import dotenv from 'dotenv'
dotenv.config()

import express from "express";
import server from "./server";
import mongoose from "mongoose";
const createServer = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qsnbi.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,{userUnifiedTopology: true});

    const app = express();

    const POST = 8080;

    server.applyMiddleware({ app });

    app.listen({ port: POST }, () =>
      console.log(
        `🚀 Server ready at http://localhost:8080${server.graphqlPath}`
      )
    );
  } catch (error) {}
};
createServer();
