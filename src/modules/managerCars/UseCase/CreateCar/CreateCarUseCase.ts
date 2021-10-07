import {
  ICarRepository,
  ICreateCarDTO,
} from "@modules/managerCars/Repositories/ICarReporitory";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  model: string;
  brand: string;
  version: string;
  year: number;
  milage: string;
  gearshift: string;
  price: string;
}
@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) {}

  async execute(car: IRequest): Promise<void> {
    const formattedCar: ICreateCarDTO = {
      ...car,
      price: Number(parseInt(car.price.replace(/[^0-9]/g, ""), 10).toFixed(2)),
    };
    const verifyCar = await this.carRepository.verifyCar(formattedCar);
    if (verifyCar) {
      throw new AppError(`Car already existis`);
    }
    this.carRepository.create(formattedCar);
  }
}

export { CreateCarUseCase };
