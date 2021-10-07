import "reflect-metadata";
import { CarRepositoryInMemory } from "@modules/managerCars/Repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { ListCarUseCase } from "./ListCarUseCase";

const expected = {
  id: "615f18d44f2874b3b90d5ba3",
  brand: "Brand Test",
  gearshift: "Automático",
  milage: "0km",
  model: "Model Test",
  price: 20000000,
  version: "1.0",
  year: 2021,
};

let listCarUseCase: ListCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe("List car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    listCarUseCase = new ListCarUseCase(carRepositoryInMemory);
  });
  it("should be able to list a specific car", async () => {
    await carRepositoryInMemory.create(expected);

    const car = await listCarUseCase.execute("615f18d44f2874b3b90d5ba3");
    expect(car).toEqual(expected);
  });

  it("should not be able to list a specific car with invalid id", async () => {
    await expect(async () => {
      await carRepositoryInMemory.create(expected);

      await listCarUseCase.execute("cb43c62d-ad06-4000-8a3b-9b6db4f4950d");
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to list a specific car with car not found", async () => {
    await expect(async () => {
      await carRepositoryInMemory.create(expected);

      await listCarUseCase.execute("615f1a9bb559c4847a690ce6");
    }).rejects.toBeInstanceOf(AppError);
  });
});
