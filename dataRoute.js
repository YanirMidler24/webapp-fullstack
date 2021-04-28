const express = require("express");
const { json } = require("body-parser");
const router = express.Router();
const dataBL = require("../BL/getDataBL");

router.route("/").get(async function (req, resp) {
  try {
    return resp.json(await dataBL.getDataFromDB());
  } catch (err) {
    console.log(err);
  }
});

router.route("/verify").post(async function (req, resp) {
  try {
    let obj = req.body;
    return resp.json(await dataBL.chkDetails(obj));
  } catch (err) {
    console.log(err);
  }
});

router.route("/insert").post(async function (req, resp) {
  try {
    let obj = req.body;

    return resp.json(await dataBL.insertData(obj));
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
