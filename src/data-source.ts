import "reflect-metadata";
import dotenv from "dotenv";
import { DataSource } from "typeorm";

dotenv.config();

const port = process.env.DB_PORT as number | undefined;
export const Conn = new DataSource({
	type: "postgres",
	host: process.env.DB_HOST,
	port: port,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	schema: process.env.DB_SCHEMA,
   
	entities:[`${__dirname}/**/entities/**/*.{ts,js}`],
  migrations:[`${__dirname}/**/migration/*.{ts,js}`],
})