import express, {Express} from 'express';
import {mergeResolvers} from '@graphql-tools/merge';
import {typeDefs} from './src/graphql/base.schema';
import {orderResolvers} from './src/graphql/order.schema';
import {productResolvers} from './src/graphql/product.schema';
import {DbConnectionController} from './src/controller/db-connection.controller';
import {graphqlHTTP} from 'express-graphql';
import {makeExecutableSchema} from 'graphql-tools';
import {DbInitController} from './src/controller/db-init.controller';
import {userResolvers} from './src/resolver/user.resolver';
import {ResolverContext} from './src/interface/resolver-context.interface';

const app: Express = express();
const dbConnectionController = new DbConnectionController();
const dbInitController = new DbInitController(dbConnectionController);

// dbConnectionController.whenReady(() => dbInitController.initUsers());

const resolvers = mergeResolvers([
  orderResolvers,
  productResolvers,
  userResolvers,
]);

app.get('/init', (req, res) => {
  dbInitController.initDatabase()
    .then(() => res.send('Ok'));
});

app.use('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({typeDefs, resolvers}),
  context: {dbConnectionController} as ResolverContext,
  graphiql: true,
}));

app.listen(3000, () => console.log('Server is listening at port 3000'));
