import express, { Router } from "express";
import serverless from "serverless-http"

const express = require('express')
const router = Router()

const app = express()

app.use(express.static('public'), router)

//app.listen(3000);
export const handler = serverless(app);