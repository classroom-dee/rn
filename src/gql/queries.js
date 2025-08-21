import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation AUTHENTICATE($username: String!, $password: String!) {
    authenticate(credentials:  {
      username: $username,
      password: $password
    }) {
      accessToken
      expiresAt
      user {
        id
        username
      }
    }
  }
`

export const GET_REPOS = gql`
  query GET_REPOS {
    repositories {
      edges {
        node {
          id,
          createdAt,
          description,
          forksCount,
          fullName,
          language,
          name,
          openIssuesCount,
          ownerAvatarUrl,
          ownerName,
          ratingAverage,
          reviewCount,
          stargazersCount,
          url,
          userHasReviewed,
          watchersCount,
          reviews {
            edges {
              node {
                id,
                createdAt,
                rating,
                text,
                userId
              }
            }
          }
        }
      }
    }
  }
`