import "reflect-metadata";
import { CarRepositoryInMemory } from "@modules/managerCars/Repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

const CREATE_CAR = {
  model: "Model Test",
  brand: "Brand Test",
  version: "1.0",
  year: 2021,
  milage: "0km",
  gearshift: "Automático",
  price: "R$ 200.000,00",
};
let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });
  it("should be able to create a new car", async () => {
    await createCarUseCase.execute(CREATE_CAR);
    const carCrerated = await carRepositoryInMemory.verifyCar({
      ...CREATE_CAR,
      price: Number(
        parseInt(CREATE_CAR.price.replace(/[^0-9]/g, ""), 10).toFixed(2)
      ),
    });

    expect(carCrerated).toHaveProperty("id");
  });

  it("should not be able to create a new car with car existis", async () => {
    await expect(async () => {
      await createCarUseCase.execute(CREATE_CAR);

      await createCarUseCase.execute(CREATE_CAR);
    }).rejects.toBeInstanceOf(AppError);
  });
});
