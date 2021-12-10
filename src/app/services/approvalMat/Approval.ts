import { getRepository } from "typeorm";
import User from "../../models/User";
import sendMail from "../Nodemailer/mailer";

class Approval {
  public async run(data: any) {
    const parsedData = JSON.parse(data);
    const { average_salary } = parsedData;
    const repository = getRepository(User);
    parsedData.total = 900;

    let accepted = false
    if (average_salary >= 500) {
      parsedData.status = "accepted";
      parsedData.current_balance += 200;
      accepted = true
    } else {
      parsedData.status = "refused";
      accepted = false
    }

    const user = repository.create({ ...parsedData });
    await repository.save(user);

    sendMail.send({
      template: "newClient",
      message: JSON.stringify({
        user: user,
        subject: "Feedback LubyCash",
        message: { accepted },
      }),
    });

    return;
  }
}

export default new Approval();
