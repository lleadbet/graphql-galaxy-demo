import { faker } from '@faker-js/faker';
import { randomUUID } from 'crypto';

export const generateUsers = (numberOfUsers: number) => {
  faker.seed(1234 * numberOfUsers)
  const users = []
  for (let i = 0; i < numberOfUsers; i++) {
    let fn = faker.name.firstName()
    let ln = faker.name.lastName()
    users.push({
      id: randomUUID(), 
      name: faker.name.fullName({firstName: fn, lastName: ln}),
      email: faker.internet.exampleEmail(fn, ln),
      username: faker.internet.userName(fn, ln),
      phoneNumber: faker.phone.number(),
      title: faker.name.jobTitle(),
      avatarUrl: faker.internet.avatar()
    })
  }
  return users
}

export const getSpecificUser = (id: string) => {
  faker.seed(5678)
    let fn = faker.name.firstName()
    let ln = faker.name.lastName()
  return {
    id,
    name: faker.name.fullName({firstName: fn, lastName: ln}),
    email: faker.internet.exampleEmail(fn, ln),
    username: faker.internet.userName(fn, ln),
    phoneNumber: faker.phone.number(),
    title: faker.name.jobTitle()
  }
}
