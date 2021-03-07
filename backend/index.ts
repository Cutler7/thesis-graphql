import express, {Express} from 'express';
import {mergeResolvers} from '@graphql-tools/merge';
import {typeDefs} from './src/graphql/base.schema';
import {DbConnectionController} from './src/controller/db-connection.controller';
import {graphqlHTTP} from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools';
import {DbInitController} from './src/controller/db-init.controller';
import {ResolverContext} from './src/interface/resolver-context.interface';
import {userResolvers} from './src/resolver/user.resolver';
import {orderResolvers} from './src/resolver/order.resolver';
import {productResolvers} from './src/resolver/product.resolver';
import {graphqlUploadExpress} from 'graphql-upload';
import {ResizeImageController} from './src/controller/resize-image.controller';
import fs from 'fs';

const app: Express = express();
const dbConnectionController = new DbConnectionController();
const dbInitController = new DbInitController(dbConnectionController);

const resolvers = mergeResolvers([
  orderResolvers,
  productResolvers,
  userResolvers,
]);

app.get('/init', (req, res) => {
  dbInitController.initDatabase()
    .then(() => res.send({result: 'OK'}));
});

app.get('/test', (req, res) => {
  const file = fs.readFileSync('./data/img/example.jpg');
  const c = new ResizeImageController(200);
  c.transformImageToMiniature(file)
    .then(() => res.send({result: 'OK'}));
});

app.use(
  '/graphql',
  graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 10}),
  graphqlHTTP({
    schema: makeExecutableSchema({typeDefs, resolvers}),
    context: {dbConnectionController} as ResolverContext,
    graphiql: true,
  }));

app.listen(3000, () => console.log('Server is listening at port 3000'));
