import { gql } from "@apollo/client";


export const DELETE_REVIEW = gql`
  mutation DELETE_REVIEW($deleteReviewId: ID!) {
    deleteReview(id: $deleteReviewId)
  }
`


export const CREATE_REVIEW = gql`
  mutation CREATE_REVIEW($ownerName: String!, $repositoryName: String!, $rating: Int!, $text: String) {
    createReview (
      review: {
        ownerName: $ownerName,
        repositoryName: $repositoryName,
        rating: $rating,
        text: $text
      }
    ) {
      createdAt,
      id,
      rating,
      repository {
        name
      },
      repositoryId,
      text,
      user {
        username,
      },
      userId
    }
  }
`


export const CREATE_USER = gql`
  mutation CREATE_USER($username: String!, $password: String!) {
    createUser (
      user: {
        username: $username,
        password: $password
      }
    ) {
      id,
      username
    }
  }
`


export const GET_ONE_REPO = gql`
  query GET_ONE_REPO($repositoryId: ID!, $first: Int, $after: String) {
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
      reviews(first: $first, after: $after) {
        edges {
          cursor,
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
        },
        pageInfo {
          endCursor
          startCursor
          hasNextPage
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
  query ME($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            userId
            text
            user {
              username
            }
            rating
            createdAt
            repository {
              id 
            }
          }
        }
      }
    }
  }
`

export const GET_REPOS = gql`
  query GET_REPOS($orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String, $first: Int, $after: String) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword, first: $first, after: $after) {
      edges {
        cursor,
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
      },
      pageInfo {
        endCursor,
        startCursor,
        hasNextPage,
        hasPreviousPage
      }
    }
  }
`