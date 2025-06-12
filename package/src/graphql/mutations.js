/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestockRequest = /* GraphQL */ `
  mutation CreateRestockRequest(
    $input: CreateRestockRequestInput!
    $condition: ModelRestockRequestConditionInput
  ) {
    createRestockRequest(input: $input, condition: $condition) {
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
export const updateRestockRequest = /* GraphQL */ `
  mutation UpdateRestockRequest(
    $input: UpdateRestockRequestInput!
    $condition: ModelRestockRequestConditionInput
  ) {
    updateRestockRequest(input: $input, condition: $condition) {
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
export const createPantryItem = /* GraphQL */ `
  mutation CreatePantryItem(
    $input: CreatePantryItemInput!
    $condition: ModelPantryItemConditionInput
  ) {
    createPantryItem(input: $input, condition: $condition) {
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
export const updatePantryItem = /* GraphQL */ `
  mutation UpdatePantryItem(
    $input: UpdatePantryItemInput!
    $condition: ModelPantryItemConditionInput
  ) {
    updatePantryItem(input: $input, condition: $condition) {
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
export const deletePantryItem = /* GraphQL */ `
  mutation DeletePantryItem(
    $input: DeletePantryItemInput!
    $condition: ModelPantryItemConditionInput
  ) {
    deletePantryItem(input: $input, condition: $condition) {
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
export const deleteRestockRequest = /* GraphQL */ `
  mutation DeleteRestockRequest(
    $input: DeleteRestockRequestInput!
    $condition: ModelRestockRequestConditionInput
  ) {
    deleteRestockRequest(input: $input, condition: $condition) {
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
