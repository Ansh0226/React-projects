const express = require("express");
const router = express.Router();
const db = require("./config");

// Get Banner Data
router.get("/banner", (req, res) => {
  db.query("SELECT * FROM banner WHERE id=1", (err, result) => {
    if (err) throw err;
    res.send(result[0]);
  });
});

// Update Banner Data
router.post("/banner", (req, res) => {
  const { isVisible, description, timer, link } = req.body;
  const sql = `UPDATE banner SET isVisible=${isVisible}, description='${description}', timer=${timer}, link='${link}' WHERE id=1`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send({ message: "Banner updated successfully" });
  });
});

module.exports = router;
