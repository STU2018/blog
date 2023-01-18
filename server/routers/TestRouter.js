const express = require("express");
const router = express.Router();
const {db, genId} = require("../db/dbUtils");


router.get("/test", async (req, res) => {
    let out = await db.async.all("select * from `admin`",[]);
    res.send({
        id: genId.NextId(),
        out:out
    });
});
module.exports = router;