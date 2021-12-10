import { Kafka, Consumer as KafkaConsumer } from "kafkajs";
import Approval from "../approvalMat/Approval";

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

    console.log(`Consuming topic ${topic}`);
    await this.consumer.run({
      eachMessage: async ({ topic, message }) => {
        console.log(message.value?.toString())
          if(topic === 'newClient'){
            console.log(message.value?.toString())
            Approval.run(message.value?.toString())
          }
      },
    });
  }
}
