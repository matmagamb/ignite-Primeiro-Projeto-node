const express = require('express');
const app = express();
app.use(express.json());
//localhost:3333

/**
 * Get - buscar uma informação
 * post- inserir uma informação
 * put - alterar  uma informação
 * patch - alterar uma informação especidica 
 * Delete - deletar  uma informação
 */
/**
 * tipos de parametros 
 * 
 * Route params => identificar um recurso , editar/deletar/buscar 
 * query params => paginação / filtro 
 * body params => objeto inserção/alteração (json)
 */


app.get("/courses", (request, response)=>{
  const query = request.query;
  console.log(query)
  return response.json(["Curso 1", "Curso 2", "Curso 3"]);
});

app.post("/courses", (request, response)=>{
  const body = request.body;
  console.log(body);

  return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (request, response)=>{
  const params = request.params;
  console.log(params);
  return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (request, response)=>{
  return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses/:id", (request, response)=>{
  return response.json(["Curso 6", "Curso 7", "Curso 4"]);
});



app.listen(3333);