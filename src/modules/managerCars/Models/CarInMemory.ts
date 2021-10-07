import { v4 as uuidv4 } from "uuid";

class CarInMemory {
  id: string;
  model: string;
  brand: string;
  version: string;
  year: number;
  milage: string;
  gearshift: string;
  price: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { CarInMemory };
