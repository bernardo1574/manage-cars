import { isValidObjectId } from "mongoose";
import { inject, injectable } from "tsyringe";

import { ICar } from "@modules/managerCars/Models/Car";
import { ICarRepository } from "@modules/managerCars/Repositories/ICarReporitory";
import { AppError } from "@shared/errors/AppError";

@injectable()
class ListCarUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) {}

  async execute(id: string): Promise<ICar> {
    if (!isValidObjectId(id)) {
      throw new AppError("Ivalid Id");
    }
    const car = await this.carRepository.list(id);
    if (!car) {
      throw new AppError("Car not found");
    }
    return car;
  }
}

export { ListCarUseCase };
