const express = require('express');
const app = express();
const data = require("./data.json")

app.use(express.json());

app.get('/client', (request, response)=>{
    response.json(data)
});

app.get('/client/:id', (request, response)=>{
    const {id} = request.params;
    const client = data.find(cli => cli.id == id);

    if(!client) return response.status(204).json();
    response.json(client)
});

app.post('/client/', (request, response)=>{
    const {name, email} = request.body;

    response.json({name, email})
});

app.put('/client/:id', (request, response)=>{
    const {id} = request.params;
    const client = data.find(cli => cli.id == id);
    if(!client) return response.status(204).json();

    const {name} = request.body;
    client.name = name;

    response.json({client})
});

app.delete('/client/:id', (request, response)=>{
    const {id} = request.params;
    const clientesFiltered = data.filter(cli=> cli.id != id)

    response.json(clientesFiltered)

});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});