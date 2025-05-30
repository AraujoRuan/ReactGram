require("dotenv").config()

const express = require("express")
const path = require("path")
const cors = require("cors")

const port = process.env.PORT

const app = express()

// config Json and form data response
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Solve Cors
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

// routes
const router = require("./routes/Router.jsx")

//upload directry
app.use("uploads", express.static(path.join(__dirname, "/uploads")))

//DB connection
require("./config/db.jsx")

app.use(router)

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})