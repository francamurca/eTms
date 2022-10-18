import "reflect-metadata";
import dotenv from "dotenv";
import express from "express";
import { Conn }  from "./data-source";
import  pessoaRoutes from "./routes/pessoa-routes";
import empresaRoutes from "./routes/empresa-routes";
import typeRoutes from "./routes/empresa-routes";
import bancoRoutes from "./routes/banco-routes";
import tipoCombustivel from "./routes/tipoCombistivel-routes";
import veiculo from "./routes/veiculo-routes";

dotenv.config();

Conn.initialize().then(() =>{
	const app = express()

	app.use(express.urlencoded({ extended: false }));
	app.use(pessoaRoutes)
	app.use(empresaRoutes)
	app.use(typeRoutes)
	app.use(bancoRoutes)
	app.use(tipoCombustivel)
	app.use(veiculo)


	return app.listen(process.env.PORT,() => {(console.log("Servidor OK"))});
 

})



	
