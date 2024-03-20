import { gql } from "@apollo/client";


export const GET_ALL_USERS = gql`
    query {
        getAllUser {
        id
        username
        role
        }
    }
`;

export const GET_USER_BY_ID = gql`
    query getUserById($id: ID!) {
        getUserById(id: $id) {
        id
        username
        role
        }
    }
`;

export const CREATE_USER = gql`
    mutation createUser($username: String!, $password: String!, $role: Role!) {
        createUser(username: $username, password: $password, role: $role) {
        id
        username
        role
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
        id
        username
        role
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $username: String, $password: String, $role: Role) {
        updateUser(id: $id, username: $username, password: $password, role: $role) {
        id
        username
        role
        }
    }
`;

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password)
    }
`;

export const GET_USER_BY_USERNAME = gql`
    query getUserByUsername($username: String!) {
        getUserByUsername(username: $username) {
        id
        username
        role
        }
    }
`;
