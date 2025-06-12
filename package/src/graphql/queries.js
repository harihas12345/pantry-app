/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPantryItem = /* GraphQL */ `
  query GetPantryItem($id: ID!) {
    getPantryItem(id: $id) {
      id
      name
      quantity
      category
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPantryItems = /* GraphQL */ `
  query ListPantryItems(
    $filter: ModelPantryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPantryItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantity
        category
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRestockRequest = /* GraphQL */ `
  query GetRestockRequest($id: ID!) {
    getRestockRequest(id: $id) {
      id
      itemName
      reason
      date
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRestockRequests = /* GraphQL */ `
  query ListRestockRequests(
    $filter: ModelRestockRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestockRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        itemName
        reason
        date
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
