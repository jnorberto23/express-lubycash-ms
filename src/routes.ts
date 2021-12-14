import express from "express";
import UserController from "./app/controllers/UserController";
import Consumer from "./app/services/kafka/Consumer";

const router = express.Router();

const consumer = new Consumer("ms-lubycash");
consumer.consume({ topic: "newClient", fromBeginning: false });
consumer.consume({ topic: "newAdmin", fromBeginning: false });
consumer.consume({ topic: "newTransferSend", fromBeginning: false });
consumer.consume({ topic: "newTransferReceived", fromBeginning: false });
consumer.consume({ topic: "forgotPassword", fromBeginning: false });

router.get("/", (req, res) => {
  res.send('API running');
});

router.get("/users?", UserController.show);
router.put("/users/:cpf_number", UserController.update);

export default router;
