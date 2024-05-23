const express = require("express");
const router = express.Router();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  try {
    res.sendFile('index.ejs');
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
