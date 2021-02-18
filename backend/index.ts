import express from 'express';
import {mergeTypeDefs} from '@graphql-tools/merge';
import {baseTypes} from './src/graphql/base.schema';
import {orderTypes} from './src/graphql/order.schema';
import {productTypes} from './src/graphql/product.schema';
import {userTypes} from './src/graphql/user.schema';


const app = express();

// const t = mergeSchemas({
//   schemas: [
//     baseSchema,
//     userSchema,
//     productSchema,
//     orderSchema,
//   ],
// });

const tt = mergeTypeDefs([
  baseTypes,
  orderTypes,
  productTypes,
  userTypes,
]);

// app.use('/graphql', graphqlHTTP({
//   schema: mergeSchemas({
//     typeDefs: baseSchema,
//     schemas: [
//       userSchema,
//       productSchema,
//       orderSchema,
//     ],
//   }),
//   graphiql: true,
// }));

app.listen(3000, () => console.log('Server is listening at port 3000'));
