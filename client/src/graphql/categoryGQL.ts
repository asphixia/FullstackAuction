import { gql } from "@apollo/client";



export const GET_ALL_CATEGORY = gql`
    query {
        getAllCategories {
        id
        name
        description
        }
    }
`;

export const GET_CATEGORY_BY_ID = gql`
    query getCategoryById($id: ID!) {
        getCategoryById(id: $id) {
        id
        name
        description
        }
    }
`;

export const CREATE_CATEGORY = gql`
    mutation createCategory($name: String!, $description: String!) {
        createCategory(name: $name, description: $description) {
        id
        name
        description
        }
    }
`;

export const DELETE_CATEGORY = gql`
    mutation deleteCategory($id: ID!) {
        deleteCategory(id: $id) {
        id
        name
        description
        }
    }
`;

export const UPDATE_CATEGORY = gql`
    mutation updateCategory($id: ID!, $name: String, $description: String) {
        updateCategory(id: $id, name: $name, description: $description) {
        id
        name
        description
        }
    }
`;


