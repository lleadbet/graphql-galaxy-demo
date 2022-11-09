export type User = {
  id: string
  name: string
  friends?: [User]
  avatarUrl: string
  username: string
  title: string
}