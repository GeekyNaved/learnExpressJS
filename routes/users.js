const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send('homepage')
})

router.get("/new", (req, res) => {
    res.send('new users')
})

module.exports = router