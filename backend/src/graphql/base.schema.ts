import gql from 'graphql-tag';
import {makeExecutableSchema} from '@graphql-tools/schema';

export const baseTypes = gql`

    interface BaseModel {
        id: ID,
        createdAt: Date,
    }

    interface DataPage {
        pageSize: Int
        page: Int
        totalRecords: Int
    }

    input QueryListArgs {
        page: String,
        orderBy: String,
        filterArgs: [FilterArg]
    }

    input FilterArg {
        key: String!
        value: String!
    }

    scalar Date
`;

export const baseSchema = makeExecutableSchema({
    typeDefs: baseTypes,
});
