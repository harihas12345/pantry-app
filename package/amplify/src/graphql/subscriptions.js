/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePantryItem = /* GraphQL */ `
  subscription OnCreatePantryItem(
    $filter: ModelSubscriptionPantryItemFilterInput
  ) {
    onCreatePantryItem(filter: $filter) {
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
export const onUpdatePantryItem = /* GraphQL */ `
  subscription OnUpdatePantryItem(
    $filter: ModelSubscriptionPantryItemFilterInput
  ) {
    onUpdatePantryItem(filter: $filter) {
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
export const onDeletePantryItem = /* GraphQL */ `
  subscription OnDeletePantryItem(
    $filter: ModelSubscriptionPantryItemFilterInput
  ) {
    onDeletePantryItem(filter: $filter) {
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
export const onCreateRestockRequest = /* GraphQL */ `
  subscription OnCreateRestockRequest(
    $filter: ModelSubscriptionRestockRequestFilterInput
  ) {
    onCreateRestockRequest(filter: $filter) {
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
export const onUpdateRestockRequest = /* GraphQL */ `
  subscription OnUpdateRestockRequest(
    $filter: ModelSubscriptionRestockRequestFilterInput
  ) {
    onUpdateRestockRequest(filter: $filter) {
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
export const onDeleteRestockRequest = /* GraphQL */ `
  subscription OnDeleteRestockRequest(
    $filter: ModelSubscriptionRestockRequestFilterInput
  ) {
    onDeleteRestockRequest(filter: $filter) {
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
