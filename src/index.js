const express = require('express');
const app = express();
app.use(express.json());

const { v4: uuidv4 } = require('uuid')
const customers = [];


//middleware
function verifyIfExistsAccountCPF(request, response, next) {
  const { cpf } = request.params;

  const costumer = customers.find(costumer => costumer.cpf === cpf);

  if (!costumer) {
    return response.status(400).json({ error: "costumer not found" })
  }
request.costumer = costumer;

return next();
}
/**
 * cpf - string 
 * name - string
 * ---------------------- 
 * id - uuid
 * statement - []
 */

app.post("/acount", (request, response) => {
  const { cpf, name } = request.body;

  const custumers_AlreadyExist = customers.some((costumer) => costumer.cpf === cpf);

  if (custumers_AlreadyExist) {
    return response.status(400).json({ error: "custumers Already Exist" })
  }
  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });
  console.log(customers[0].id);
  return response.status(201).send()

});

app.get("/statement/:cpf",verifyIfExistsAccountCPF, (request, response) => {
const {costumer} = request;
  return response.json(costumer.statement)
})

app.listen(3333);