import { gql } from '@apollo/client';
import { MakePayment } from '../util/makePayment';

const USER_QUERY = gql`
mutation($userId: ID!, $paymentInformation: PaymentInformationInput!) {
  makePayment(userId: $userId, paymentInformation: $paymentInformation) {
    id
    paymentStatus {
      __typename
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
`
export const MakePaymentRegular = () => {
    return <MakePayment query={USER_QUERY} />
}