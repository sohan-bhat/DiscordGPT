const express = require('express')
const server = express()

server.all("/", (req, res) => {
    res.send("Bot is Running!")
})

function keepAlive() {
    server.listen(4000, () => {
        console.log("Server is Ready!")
    })
}

module.exports = keepAlive