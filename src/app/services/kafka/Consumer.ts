import { Kafka, Consumer as KafkaConsumer } from "kafkajs";
import Approval from "../approvalMat/Approval";
import sendMail from "../Nodemailer/mailer";

interface InterfaceConsume {
  topic: string;
  fromBeginning: boolean;
}

export default class Consumer {
  private consumer: KafkaConsumer;

  constructor(groupId: string) {
    const kafka = new Kafka({
      clientId: "mailer-consumer",
      brokers: ["kafka:29092"],
    });

    this.consumer = kafka.consumer({ groupId });
  }

  public async consume({ topic, fromBeginning }: InterfaceConsume) {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic, fromBeginning });
    await this.consumer.run({
      eachMessage: async ({ topic, message }) => {
        if (topic === "newClient") {

          Approval.run(message.value?.toString());
        } else {
          sendMail.send({
            template: topic.toString(),
            message: message.value?.toString(),
          });
        }
      },
    });
  }
}
