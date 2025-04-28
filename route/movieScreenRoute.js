const {getScreen,postScreen,updateScreen,deleteScreenn} = require("../controller/screenController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")
const route = require("express").Router()

route.get("/",getScreen)

route.post("/",[auth,admin],postScreen)

route.put("/:id",[auth,admin],updateScreen)

route.delete("/:id",[auth,admin],deleteScreenn)

module.exports = route