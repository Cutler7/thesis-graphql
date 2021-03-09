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
import {Collection} from './src/enum/collection.enum';

const app: Express = express();
const dbConnectionController = new DbConnectionController();
const dbInitController = new DbInitController(dbConnectionController);

const resolvers = mergeResolvers([
  orderResolvers,
  productResolvers,
  userResolvers,
]);

const getResolverContext = async (headers: IncomingHttpHeaders): Promise<ResolverContext> => {
  let isAuthorized = false;
  try {
    const decoded: any = jwt.decode(headers.authorization);
    const secret = await dbConnectionController.getDb().collection(Collection.USER)
      .findOne({username: decoded.username});
    isAuthorized = !!jwt.verify(headers.authorization, secret.password);
  } catch (e) {
    console.log(e);
  }
  return {
    dbConnectionController,
    isAuthorized,
  };
};

app.get('/init', (req, res) => {
  dbInitController.initDatabase()
    .then(() => res.send({result: 'OK'}));
});

app.get('/test', (req, res) => {
  res.send({result: 'ok'});
});

app.use(
  '/graphql',
  graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 10}),
  graphqlHTTP(async (req) => ({
    schema: makeExecutableSchema({typeDefs, resolvers}),
    context: await getResolverContext(req.headers),
    graphiql: true,
  })),
);

app.listen(3000, () => console.log('Server is listening at port 3000'));
