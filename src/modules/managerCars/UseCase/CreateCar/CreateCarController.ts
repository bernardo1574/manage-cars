import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarUseCase";

class CreateCarUSeCase {
  async handle(request: Request, response: Response): Promise<Response> {
    const car = request.body;
    const createCarUseCase = container.resolve(CreateCarUseCase);
    await createCarUseCase.execute(car);
    return response.status(201).send();
  }
}

export { CreateCarUSeCase };
