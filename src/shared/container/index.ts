import { ICarRepository } from "@modules/managerCars/Repositories/ICarReporitory";
import { CarRepository } from "@modules/managerCars/Repositories/implementations/CarRepository";
import { container } from "tsyringe";

container.registerSingleton<ICarRepository>("CarRepository", CarRepository);
