import {DocumentNode} from 'graphql';
import gql from 'graphql-tag';

export const SCHEMA: DocumentNode = gql`
    type Query {
        productList: [Product]
        getProduct(id: ID!): Product
    }

    type Mutation {
        deleteProduct(id: ID!): Product
        createOrUpdateProduct(product: ProductInput!): Product
    }

    scalar Date

    input ProductInput {
        id: ID
        name: String
        description: String
        price: Int
        properties: [ProductPropertyInput]
    }

    type Product {
        id: ID
        name: String
        description: String
        price: Int
        properties: [ProductProperty]
        comments: [Comment]
    }

    input ProductPropertyInput {
        id: ID
        name: String
        value: String
    }

    type ProductProperty {
        id: ID
        name: String
        value: String
    }

    type Comment {
        id: ID
        rate: Int,
        createdAt: Date,
        author: String,
        comment: String
    }
`;
