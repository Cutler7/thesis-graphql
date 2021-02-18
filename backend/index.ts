import express from 'express';
import {mergeResolvers, mergeTypeDefs} from '@graphql-tools/merge';
import {makeExecutableSchema} from '@graphql-tools/schema';
import {graphqlHTTP} from 'express-graphql';
import {baseTypes} from './src/graphql/base.schema';
import {orderResolvers, orderTypes} from './src/graphql/order.schema';
import {productResolvers, productTypes} from './src/graphql/product.schema';
import {userResolvers, userTypes} from './src/graphql/user.schema';

const typeDefs = mergeTypeDefs([
  baseTypes,
  orderTypes,
  productTypes,
  userTypes,
]);

const resolvers = mergeResolvers([
  orderResolvers,
  productResolvers,
  userResolvers,
]);

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: makeExecutableSchema({typeDefs, resolvers}),
  graphiql: true,
}));

app.listen(3000, () => console.log('Server is listening at port 3000'));
