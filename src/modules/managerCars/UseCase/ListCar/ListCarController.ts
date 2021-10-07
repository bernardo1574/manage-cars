import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarUseCase } from "./ListCarUseCase";

class ListCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const listCarUseCase = container.resolve(ListCarUseCase);
    const car = await listCarUseCase.execute(id);
    return response.json(car);
  }
}

export { ListCarController };
