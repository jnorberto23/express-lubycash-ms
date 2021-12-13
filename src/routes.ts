import express from "express";
import UserController from "./app/controllers/UserController";
import Consumer from "./app/services/kafka/Consumer";


const router = express.Router();

// Home routes

const consumer = new Consumer("ms-lubycash");
consumer.consume({ topic: "newClient", fromBeginning: false });
consumer.consume({ topic: "newAdmin", fromBeginning: false });
consumer.consume({ topic: "newTransferSend", fromBeginning: false });
consumer.consume({ topic: "newTransferReceived", fromBeginning: false });
consumer.consume({ topic: "forgotPassword", fromBeginning: false });

router.get("/", (req, res) => {
  res.send(process.env.DATABASE_URL);
});

// User routes
router.get("/users?", UserController.show);
router.put("/users/:cpf_number", UserController.update);
//router.put("/user/", auth, UserControllers.edit)
//router.delete("/user/:id", auth, UserControllers.deleteById););
//router.get("/user/

export default router;
