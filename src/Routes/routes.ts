import express from "express";
//import HomeControllers from "../controllers/HomeControllers.js";
import UserControllers from "../Controllers/UserControllers";

//import auth from "../middleware/auth.js";

const router = express.Router();

// Home routes

router.get("/", (req, res) => {
    res.send(process.env.DATABASE_URL)
});

// User routes

router.post("/users", UserControllers.Store);
//router.post("/auth", UserControllers.auth);
//router.get("/user/:id", UserControllers.findById);
//router.put("/user/", auth, UserControllers.edit)
//router.delete("/user/:id", auth, UserControllers.deleteById);

export default router;