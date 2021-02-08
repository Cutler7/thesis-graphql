import {buildSchema} from 'graphql';
import {graphqlHTTP} from 'express-graphql';
import express from 'express';

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {hello: () => 'Hello world!'};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/api', (req, res) => {
  res.send({test: 'Hello World!'});
});

app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));
