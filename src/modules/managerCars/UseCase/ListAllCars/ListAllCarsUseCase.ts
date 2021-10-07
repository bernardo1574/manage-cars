import { ICar } from "@modules/managerCars/Models/Car";
import {
  IArgs,
  ICarRepository,
} from "@modules/managerCars/Repositories/ICarReporitory";
import { inject, injectable } from "tsyringe";

interface IRequest {
  model?: string;
  brand?: string;
  version?: string;
  milage?: string;
  gearshift?: string;
  year?: [number, number];
  price?: [string, string];
}

@injectable()
class ListAllCarsUseCase {
  constructor(
    @inject("CarRepository")
    private carRepository: ICarRepository
  ) {}

  private formatObject(params: IRequest) {
    const values = Object.entries(params);
    const findArgs: IArgs = {};
    values.forEach((value) => {
      if (
        (value[0] === "year" || value[0] === "price") &&
        typeof value[1] === "object"
      ) {
        if (value[0] === "year") {
          findArgs.year = { $gte: value[1][0], $lte: value[1][1] };
        } else {
          findArgs.price = {
            $gte: Number(
              parseInt(value[1][0].replace(/[^0-9]/g, ""), 10).toFixed(2)
            ),
            $lte: Number(
              parseInt(value[1][1].replace(/[^0-9]/g, ""), 10).toFixed(2)
            ),
          };
        }
      } else {
        let res = value[1];
        if (value[0] === "price") {
          res = parseInt(value[1].replace(/[^0-9]/g, ""), 10).toFixed(2);
        }
        // eslint-disable-next-line prefer-destructuring
        findArgs[value[0]] = res;
      }
    });
    return findArgs;
  }

  async execute(params: IRequest): Promise<ICar[]> {
    let formattedParams = {};
    if (Object.keys(params).length) {
      formattedParams = this.formatObject(params);
    }

    const car = await this.carRepository.listAll(formattedParams);
    return car;
  }
}

export { ListAllCarsUseCase };
