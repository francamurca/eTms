import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import { Conn }  from "./data-source";
import  routes from "./routes/routes";
dotenv.config();

Conn.initialize().then(() =>{
	const app = express()

	app.use(express.json())  
	app.use(routes)


	return app.listen(process.env.PORT)


})



	
