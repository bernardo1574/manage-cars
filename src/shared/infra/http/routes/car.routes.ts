import { CreateCarUSeCase } from "@modules/managerCars/UseCase/CreateCar/CreateCarController";
import { ListAllCarsController } from "@modules/managerCars/UseCase/ListAllCars/ListAllCarsController";
import { ListCarController } from "@modules/managerCars/UseCase/ListCar/ListCarController";
import { UpdateCarController } from "@modules/managerCars/UseCase/UpdateCar/UpdateCarController";
import { Router } from "express";

const carRoutes = Router();

const createCarController = new CreateCarUSeCase();
const listAllCarsController = new ListAllCarsController();
const listCarController = new ListCarController();
const updateCarController = new UpdateCarController();

carRoutes.post("/", createCarController.handle);
carRoutes.get("/", listAllCarsController.handle);
carRoutes.get("/:id", listCarController.handle);
carRoutes.put("/:id", updateCarController.handle);

export { carRoutes };
