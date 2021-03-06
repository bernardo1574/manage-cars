import lodash from "lodash";

import { ICar } from "@modules/managerCars/Models/Car";
import { CarInMemory as Car } from "@modules/managerCars/Models/CarInMemory";

import { ICreateCarDTO, ICarRepository, IArgs } from "../ICarReporitory";

class CarRepositoryInMemory implements ICarRepository {
  cars: Car[] = [];

  async listAll(args: IArgs): Promise<ICar[]> {
    return this.cars;
  }
  async list(id: string): Promise<ICar> {
    return this.cars.find((car) => car.id === id);
  }
  async create({
    brand,
    gearshift,
    milage,
    model,
    price,
    version,
    year,
    id,
  }: ICreateCarDTO): Promise<void> {
    const car = new Car();

    Object.assign(car, {
      brand,
      gearshift,
      milage,
      model,
      price,
      version,
      year,
      id,
    });

    this.cars.push(car);
  }
  async update(car: ICreateCarDTO): Promise<void> {
    this.cars
      .filter((cars) => cars.id === car.id)
      .map((carsUpdate) => Object.assign(carsUpdate, car));
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async verifyCar(car: ICreateCarDTO): Promise<ICar> {
    return this.cars.find(
      (res) =>
        res.brand === car.brand &&
        res.model === car.model &&
        res.price === car.price &&
        res.year === car.year
    );
  }
}

export { CarRepositoryInMemory };
