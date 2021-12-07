import { getRepository } from "typeorm";
import User from "../../models/User";

class Approval {
  public async run(data: any) {
    const parsedData = JSON.parse(data)
    const { average_salary } = parsedData;
    const repository = getRepository(User);
    parsedData.total = 900;
    console.log(parsedData.total)
    if (average_salary >= 500) {
        parsedData.status = "accepted";
      console.log("accepted")
    } else {
        parsedData.status = "refused";
      console.log("refused")
    }

    const user = repository.create({ ...parsedData });
    await repository.save(user);
    console.log(user)
  }
}

export default new Approval();
