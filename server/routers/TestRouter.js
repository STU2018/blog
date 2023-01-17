const express = require("express");
const router = express.Router();
const {db, genId} = require("../db/dbUtils");


router.get("/test", (req, res) => {
    db.all("select * from 'admin'", [], (err, rows) => {
        console.log(rows);
    });
    res.send({
        id: genId.NextId(),
    });
});
module.exports = router;