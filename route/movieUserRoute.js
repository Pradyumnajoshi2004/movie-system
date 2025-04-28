const {getMovieUser,postMovieUser,login,updateUser, deleteUser} = require("../controller/movieUserController")
const auth = require("../middleware/auth")

const route = require("express").Router()

route.get("/",getMovieUser)

route.post("/",postMovieUser)

route.put("/:id",auth,updateUser)

route.delete("/:id",auth,deleteUser)

route.post("/login",login)

module.exports = route