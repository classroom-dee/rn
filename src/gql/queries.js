import { gql } from "@apollo/client";


export const GET_ONE_REPO = gql`
  query GET_ONE_REPO($repositoryId: ID!) {
    repository(id: $repositoryId) {
      id,
      stargazersCount,
      forksCount,
      reviewCount,
      ratingAverage,
      ownerAvatarUrl,
      description,
      language,
      fullName,
      url,
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`


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

export const ME = gql`
  query ME {
    me {
      id
      username
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