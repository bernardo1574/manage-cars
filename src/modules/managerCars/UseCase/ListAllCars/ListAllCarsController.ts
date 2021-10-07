import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllCarsUseCase } from "./ListAllCarsUseCase";

class ListAllCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const params = request.query;
    const listAllCarsUseCase = container.resolve(ListAllCarsUseCase);
    const cars = await listAllCarsUseCase.execute(params);
    return response.json(cars);
  }
}

export { ListAllCarsController };
