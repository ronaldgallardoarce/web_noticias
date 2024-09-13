const { Router } = require("express");
const categoriaRouter = require("./categoriaRouter");
const tagRouter = require("./tagRouter");

const router = Router();

router.use("/categoria", categoriaRouter); //"http://localhost:3001/api/categoria"
router.use("/tag", tagRouter); //"http://localhost:3001/api/tag"


module.exports = router;
