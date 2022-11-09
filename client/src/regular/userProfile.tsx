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
    friends {
      id
      name
    }
  }
}
`
export const UserProfileRegular = () => {
    return <UserProfile query={USER_QUERY} />
}