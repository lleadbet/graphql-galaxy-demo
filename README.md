# GraphQL Galaxy Demo Repo

## Usage

## Example Queries

### Without @defer

```graphql
query {
  users {
    id
    name
    friends {
      id
      name
    }
  }
}
```

```graphql
mutation ($userId: ID!, $paymentInformation: PaymentInformation!) {
  makePayment(userId: $userId, paymentInformation: $paymentInformation) {
    id
    user {
      id
      name
    }
    paymentStatus {
      id
      ... on PaymentSuccess {
        billedAmount
      }
      ... on PaymentFailed {
        reason
      }
    }
  }
}
```

### With @defer

```graphql
query {
  users {
    id
    name
    ... @defer {
      friends {
        id
        name
      }
    }
  }
}
```

```graphql
mutation ($userId: ID!, $paymentInformation: PaymentInformation!) {
  makePayment(userId: $userId, paymentInformation: $paymentInformation) {
    id
    user {
      id
      name
    }
    ... @defer {
      paymentStatus {
        id
        ... on PaymentSuccess {
          billedAmount
        }
        ... on PaymentFailed {
          reason
        }
      }
    }
  }
}
```
