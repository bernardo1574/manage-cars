import "reflect-metadata";
import { CarRepositoryInMemory } from "@modules/managerCars/Repositories/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { UpdateCarUseCase } from "./UpdateCarUseCase";

const initial = {
  id: "615f18d44f2874b3b90d5ba3",
  brand: "Brand Test",
  gearshift: "Automático",
  milage: "0km",
  model: "Model Test",
  price: 20000000,
  version: "1.0",
  year: 2021,
};

const expected = {
  id: "615f18d44f2874b3b90d5ba3",
  brand: "Brand Test Updated",
  gearshift: "Automático Updated",
  milage: "0km",
  model: "Model Test",
  price: 20000000,
  version: "1.0",
  year: 2021,
};

let updateCarUseCase: UpdateCarUseCase;
let carRepositoryInMemory: CarRepositoryInMemory;

describe("List car", () => {
  beforeEach(() => {
    carRepositoryInMemory = new CarRepositoryInMemory();
    updateCarUseCase = new UpdateCarUseCase(carRepositoryInMemory);
  });
  it("should be able to update a specific car", async () => {
    await carRepositoryInMemory.create(initial);

    await updateCarUseCase.execute(expected.id, {
      ...expected,
      price: "R$ 200.000,00",
    });

    const car = await carRepositoryInMemory.list(initial.id);
    expect(car).toEqual(expected);
  });

  it("should not be able to update a specific car with invalid id", async () => {
    await expect(async () => {
      await carRepositoryInMemory.create(expected);

      await updateCarUseCase.execute("cb43c62d-ad06-4000-8a3b-9b6db4f4950d", {
        ...expected,
        price: "R$ 200.000,00",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update a specific car with car not found", async () => {
    await expect(async () => {
      await carRepositoryInMemory.create(expected);

      await updateCarUseCase.execute("615f1a9bb559c4847a690ce6", {
        ...expected,
        price: "R$ 200.000,00",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
