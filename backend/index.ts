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
import {IncomingHttpHeaders} from 'http';
import jwt from 'jsonwebtoken';

const app: Express = express();
const dbConnectionController = new DbConnectionController();
const dbInitController = new DbInitController(dbConnectionController);

const resolvers = mergeResolvers([
  orderResolvers,
  productResolvers,
  userResolvers,
]);

const getResolverContext = (headers: IncomingHttpHeaders): ResolverContext => {
  console.log(headers);
  return {
    dbConnectionController,
    isAuthorized: true,
  };
};

app.get('/init', (req, res) => {
  dbInitController.initDatabase()
    .then(() => res.send({result: 'OK'}));
});

app.get('/test', (req, res) => {
  const token = jwt.sign(
    {role: 'admin'},
    'secret',
    {expiresIn: 60 * 20},
  );
  res.send({result: token});
});

app.use(
  '/graphql',
  graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 10}),
  graphqlHTTP((req) => ({
    schema: makeExecutableSchema({typeDefs, resolvers}),
    context: getResolverContext(req.headers),
    graphiql: true,
  })),
);

app.listen(3000, () => console.log('Server is listening at port 3000'));
