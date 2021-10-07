import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateCarUseCase } from "./UpdateCarUseCase";

class UpdateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const car = request.body;
    const updateCarUseCase = container.resolve(UpdateCarUseCase);
    await updateCarUseCase.execute(id, car);
    return response.json();
  }
}

export { UpdateCarController };
