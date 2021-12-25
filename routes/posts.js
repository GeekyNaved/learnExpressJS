const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send('post page index')
})

router.get("/newposts", (req, res) => {
    res.send("new post page")
})

module.exports = router