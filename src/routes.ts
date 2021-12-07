import express from "express";
import UserController from "./app/controllers/UserController";
import Consumer from "./app/services/kafka/Consumer";


const router = express.Router();

// Home routes

const consumer = new Consumer("ms-email");

consumer.consume({ topic: "newClient", fromBeginning: false });

router.get("/", (req, res) => {
  res.send(process.env.DATABASE_URL);
});

// User routes

router.post("/users", UserController.store);
//router.put("/user/", auth, UserControllers.edit)
//router.delete("/user/:id", auth, UserControllers.deleteById););
//router.get("/user/

export default router;
