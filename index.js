const express = require('express')
const app = express()
const port = 3000

app.get('/Thongke', (req, res) => {
    return res.send("hello world!")
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}/Thongke`))