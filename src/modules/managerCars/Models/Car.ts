import { Schema, model } from "mongoose";

interface ICar {
  id?: string;
  model: string;
  brand: string;
  version: string;
  year: number;
  milage: string;
  gearshift: string;
  price: number;
  createdAt?: { type: Date; default: Date };
  updatedAt?: { type: Date; default: Date };
}

const CarSchema = new Schema<ICar>({
  model: String,
  brand: String,
  version: String,
  year: Number,
  milage: String,
  gearshift: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const Car = model<ICar>("Cars", CarSchema, "Cars");

export { Car, ICar };
