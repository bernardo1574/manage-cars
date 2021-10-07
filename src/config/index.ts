import { config } from "dotenv";

const envfile = `.env`;
const envdir = process.cwd();

config({ path: `${envdir}/${envfile}` });

export const server = {
  port: process.env.PORT,
};

// dados de conexão com o banco
export const dbConnections = {
  mongo: {
    name: "car_manager",
    conn: String(process.env.DATABASE_URL),
  },
};
