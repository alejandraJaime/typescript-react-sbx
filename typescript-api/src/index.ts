import express from "express"
const app = express()
const PORT = 3000

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} on ${new Date().toLocaleDateString()}`
  )
})

// General middlewares
app.use(express.json())

// ROUTES
// entries
import entriesRouter from "./routes/entries"
app.use("/entries", entriesRouter)

// endpoint to ping server
app.get("/ping", (_req, res) => {
  res.status(200).send("pong")
})
