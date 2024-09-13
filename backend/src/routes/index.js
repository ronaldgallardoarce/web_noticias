const { Router } = require("express");
const categoriaRouter = require("./categoriaRouter");


const router = Router();

router.use("/categoria", categoriaRouter); //"http://localhost:3001/api/categoria"



module.exports = router;
