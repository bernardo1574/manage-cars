import {
  ICarRepository,
  ICreateCarDTO,
} from "@modules/managerCars/Repositories/ICarReporitory";
import { isValidObjectId } from "mongoose";
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
class UpdateCarUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) {}

  async execute(id: string, car: IRequest): Promise<void> {
    if (!isValidObjectId(id)) {
      throw new AppError("Ivalid Id");
    }
    const existisCar = await this.carRepository.list(id);
    if (!existisCar) {
      throw new AppError("Car not found");
    }
    const updateCar: ICreateCarDTO = {
      ...car,
      id,
      price: Number(parseInt(car.price.replace(/[^0-9]/g, ""), 10).toFixed(2)),
    };
    await this.carRepository.update(updateCar);
  }
}

export { UpdateCarUseCase };
