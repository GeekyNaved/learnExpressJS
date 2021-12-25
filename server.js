const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    // res.sendStatus(200)
    // res.send("Hello world");
    // res.json({ message: 'error'})
    res.render("index", { text: "world" })
});


const userRouter = require("./routes/users")
// const postRouter = require("./routes/posts")

app.use("/users", userRouter)
// app.use("/posts", postRouter)
app.listen(3000)