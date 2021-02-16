import {buildASTSchema, GraphQLFieldResolver} from 'graphql';
import {graphqlHTTP} from 'express-graphql';
import express from 'express';
import {data, users} from './_data/_data';
import {SCHEMA} from './schema';

const root = {
  productList: () => data,
  userList: () => users,
  getProduct: (args: { id: string }, obj: any, context: any, info: any) => {
    // console.log(args);
    // console.log(obj);
    // console.log(context);
    // console.log(info);
    return data.find(el => el.id === args.id);
  },
};

let b: GraphQLFieldResolver<any, any> = (source, args, context, info) => null;

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: buildASTSchema(SCHEMA),
  rootValue: root,
  graphiql: true,
}));

app.get('/api', (req, res) => {
  res.send({test: 'Hello World!'});
});

app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));
