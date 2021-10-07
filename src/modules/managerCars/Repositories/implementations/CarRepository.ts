import { Car, ICar } from "@modules/managerCars/Models/Car";

import { AppError } from "@shared/errors/AppError";

import { IArgs, ICarRepository, ICreateCarDTO } from "../ICarReporitory";

class CarRepository implements ICarRepository {
  private repository = Car;

  async create(car: ICreateCarDTO): Promise<void> {
    await this.repository.create(car);
  }
  async listAll(findArgs: IArgs): Promise<ICar[]> {
    const cars = await this.repository.find().where(findArgs);
    return cars;
  }
  async list(id: string): Promise<ICar> {
    const car = await this.repository.findOne({ _id: id });
    return car;
  }
  async update(car: ICreateCarDTO): Promise<void> {
    await this.repository.updateOne({ _id: car.id }, { $set: car });
  }
  async delete(id: string): Promise<void> {
    throw new AppError("Method not implemented.", 500);
  }
  async verifyCar(car: ICreateCarDTO): Promise<ICar> {
    const res = await this.repository.findOne().where(car);
    return res;
  }
}
export { CarRepository };
