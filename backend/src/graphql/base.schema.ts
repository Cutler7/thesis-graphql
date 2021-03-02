import gql from 'graphql-tag';
import {mergeTypeDefs} from '@graphql-tools/merge';
import {orderTypes} from './order.schema';
import {productTypes} from './product.schema';
import {userTypes} from './user.schema';

export const baseTypes = gql`

    interface BaseModel {
        _id: ID,
        createdAt: Date,
    }

    interface DataPage {
        pageSize: Int
        page: Int
        totalRecords: Int
    }

    input QueryListArgs {
        page: Int,
        pageSize: Int
        orderBy: String,
        filterArgs: [FilterArg]
    }

    input FilterArg {
        key: String!
        value: String!
        op: FilterOperator
    }

    scalar Date

    enum FilterOperator {
        eq
        neq
        gt
        lt
        in
    }
`;

export const typeDefs = mergeTypeDefs([
    baseTypes,
    orderTypes,
    productTypes,
    userTypes,
]);
