import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import { Conn }  from "./data-source";
import  pessoaRoutes from "./routes/pessoa-routes";
import empresaRoutes from "./routes/empresa-routes";
import typeRoutes from "./routes/empresa-routes";
import bancoRoutes from "./routes/banco-routes";

dotenv.config();

Conn.initialize().then(() =>{
	const app = express()

	app.use(express.urlencoded({ extended: false }));
	app.use(pessoaRoutes)
	app.use(empresaRoutes)
	app.use(typeRoutes)
	app.use(bancoRoutes)


	return app.listen(process.env.PORT,() => {(console.log("Servidor OK"))});
 

})



	
