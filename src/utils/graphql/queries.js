import { gql } from '@apollo/client';

const GET_COMPETITIONS = gql`
    query getCompetitions {
        competitions {
            id
            name
        }
    }
`;

const GET_USERS = gql`
    query getUsers {
        users {
            id
            first_name
            last_name
            email
        }
    }
`;

export { GET_COMPETITIONS, GET_USERS };