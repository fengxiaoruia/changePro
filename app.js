const express = require("express");
const app = express();
const change = require('./jd_change/change')
const beaninfo = require('./jd_change/bean_info')

app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world")
})

app.post("/getChangePro", async (req, res) => {
    let ck = req.body.data
    if (ck){
        let changePro = await change.getChangePro(ck)
        res.status(200).send(changePro);
    }else {
        res.status(201).send("无ck");
    }
})

app.post("/getBeaninfo", async (req, res) => {
    let ck = req.body.data
    if (ck){
        let Beaninfo = await beaninfo.getBeaninfo(ck)
        res.status(200).send(Beaninfo);
    }else {
        res.status(201).send("无ck");
    }
    res.status(200).send();
})

const port = 3100;
app.listen(port, () => {
    console.log(`资产查询服务已运行 http://localhost:${port}`)
});
