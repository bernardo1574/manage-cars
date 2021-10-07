import "reflect-metadata";
import { CarRepositoryInMemory } from "@modules/managerCars/Repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe("Create car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carRepositoryInMemory);
  });
  it("should be able to create a new car", async () => {
    const CREATE_CAR = {
      model: "Model Test",
      brand: "Brand Test",
      version: "1.0",
      year: 2021,
      milage: "0km",
      gearshift: "Automático",
      price: "R$ 200.000,00",
    };
    await createCarUseCase.execute({
      model: "Model Test",
      brand: "Brand Test",
      version: "1.0",
      year: 2021,
      milage: "0km",
      gearshift: "Automático",
      price: "R$ 200.000,00",
    });
    const carCreated = await carRepositoryInMemory.verifyCar({
      model: "Model Test",
      brand: "Brand Test",
      version: "1.0",
      year: 2021,
      milage: "0km",
      gearshift: "Automático",
      price: Number(
        parseInt("R$ 200.000,00".replace(/[^0-9]/g, ""), 10).toFixed(2)
      ),
    });

    console.log(carCreated);

    expect(carCreated).toHaveProperty("_id");
  });
});
