export const typeDefs = `#graphql
directive @defer(
  if: Boolean! = true
  label: String
) on FRAGMENT_SPREAD | INLINE_FRAGMENT

type Query {
  user(id: ID!): User!
  getPaymentStatus: PaymentStatus!
  users: [User!]!
}

type User {
  id: ID!
  name: String!
  email: String
  username: String!
  friends(first: Int = 10, after: Int = 0): [User!]
  phoneNumber: String
  title: String
  avatarUrl: String
}

type Mutation {
  makePayment(
    userId: ID!
    paymentInformation: PaymentInformationInput!
  ): MakePaymentResult!
}

input PaymentInformationInput {
  fakeInfo: String!
}

type MakePaymentResult {
  id: ID!
  user: User!
  paymentStatus: PaymentStatus
}

interface PaymentStatus {
  id: ID!
}

type PaymentSuccess implements PaymentStatus {
  id: ID!
  billedAmount: Float!
}

type PaymentFailed implements PaymentStatus {
  id: ID!
  reason: String!
}
`;
