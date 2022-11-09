import { gql } from '@apollo/client';
import { UserProfile } from '../util/userProfile';

const USER_QUERY = gql`
query UserRegular{
  users {
    id
    name
    avatarUrl
    title
    username
    ... @defer {
      friends {
        id
        name
      }
    }
  }
}
`
export const UserProfileDeferred = () => {
    return <UserProfile query={USER_QUERY} />
}