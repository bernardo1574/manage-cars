import { ICar } from "@modules/managerCars/Models/Car";

interface ICreateCarDTO {
  id?: string;
  model: string;
  brand: string;
  version: string;
  year: number;
  milage: string;
  gearshift: string;
  price: number;
}

interface IArgs {
  [key: string]: any;
  year?: { $gte?: number; $lte?: number };
  price?: { $gte?: number; $lte?: number };
}

interface ICarRepository {
  listAll(args: IArgs): Promise<ICar[]>;
  list(id: string): Promise<ICar>;
  create(car: ICreateCarDTO): Promise<void>;
  update(car: ICreateCarDTO): Promise<void>;
  delete(id: string): Promise<void>;
  verifyCar(car: ICreateCarDTO): Promise<ICar>;
}

export { ICreateCarDTO, ICarRepository, IArgs };
