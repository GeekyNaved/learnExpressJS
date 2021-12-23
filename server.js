const express = require('express');
const app = express();
app.set('view engine', 'ejs')
// app.get('/', (req, res) => {
//     // res.sendStatus(200)
//     // res.send("Hello world");
//     // res.json({ message: 'error'})
//     res.render("index", { text: "world" })
// });


const userRouter = require("./routes/users")

app.use("/", userRouter)
app.listen(3000)