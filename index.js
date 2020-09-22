var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var erroGET = require('./dataFiles/requisitionErrors.json');

  
  
// Construindo o Schema para o GraphQL
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Constrindo JSON para GET no endpoint principal para não retornar ERRO.



var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/', function(req, res) {
    res.send(erroGET);
});


app.listen(4000);



console.log('Executando GRAPHQL Em -  http://localhost:4000/graphql');