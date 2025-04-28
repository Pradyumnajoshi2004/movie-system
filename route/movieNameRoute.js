const {getMovieName,postMovieName, updateMovieName, deleteMovieName} = require("../controller/movieNameController")
const admin = require("../middleware/admin")
const auth = require("../middleware/auth")
const route = require("express").Router()

route.get("/",getMovieName)

route.post("/",[auth,admin],postMovieName)

route.put("/:id",[auth,admin],updateMovieName)

route.delete("/:id",[auth,admin],deleteMovieName)


module.exports = route