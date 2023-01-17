const express = require('express')
const multer = require("multer")
const app = express();

const port = 8080;

//开放跨域请求 : 放在最开头，先进行验证
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");//允许跨域域名
    res.header("Access-Control-Allow-Headers", "*");//允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");//允许的跨域请求方式
    if (req.method === "OPTIONS") {//options尝试请求快速结束
        res.sendStatus(200);
    } else {
        next();
    }
})

//json中间件
app.use(express.json());

//上传
const update = multer({
    dest:"./public/upload/temp"
})
app.use(update.any())


app.use("/",require("./routers/TestRouter"));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log("Server running on http://localhost:" + port + "/");
});