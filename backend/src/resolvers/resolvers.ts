import { faker } from '@faker-js/faker';
import { GraphQLError } from 'graphql';
import { v4 as uuidv4 } from 'uuid';
import { generateUsers, getSpecificUser } from './data.js';

const wait = async (time: number) => {
    return new Promise((res) => {
        setTimeout(res, time)
    })
}

export const resolvers = {
    Query: {
        users: (p,a,c,i)=>{
            return generateUsers(5)
        },
        user: (p,a,c,i)=>{
            console.log(getSpecificUser(a.id))
            return getSpecificUser(a.id)
        }
    },
    Mutation: {
        makePayment:(p,a,c,i)=>{
            let u = getSpecificUser(a.userId)
            return {
                id: uuidv4(),
                user: u,
            }
        }
    },
    User: {
        avatarUrl: async () => {
            faker.seed()
            let rng = faker.datatype.number(100)
            await wait(rng * 100)
            let shouldErrorOnAvatar =  rng % 10 == 0 
            console.log(shouldErrorOnAvatar, rng)
            return shouldErrorOnAvatar ? null : faker.internet.avatar()
        },
        friends: async (p,a,c,i)=> {
            await wait(1000)
            if (a.first > 100 ){
                throw new GraphQLError('too many friends')
            }
            await wait(a.first * 100 -100)
            return generateUsers(a.first)
        },
        company: async(p,a,c,i)=>{
            await wait(100)
            return {
                id: uuidv4(),
                name: 'Apollo Graph',
            }
        },
        definitelyNotAnError:async ()=>{
            return {
                code: ""
            }
        }
    },
    Error: {
        message: async()=>{
            await wait(400)
            throw new GraphQLError('I mean, what did you expect?')
        }
    },
    Company: {
        owner: async (p,a,c,i)=>{
            await wait(100)
            console.log(p)
            return getSpecificUser("1")
        }
    },
    MakePaymentResult: {
        paymentStatus: async (p,a,c,i)=>{
            let pseudoRandom = Math.floor(Math.random()*100)
            await wait(100 * 10)
            if(pseudoRandom % 2 === 0){
                return {
                    id: uuidv4(),
                    billedAmount: Math.random() * 100 + Math.random()
                }
            }else{
                return {
                    id: uuidv4(),
                    reason: "bad payment info"
                }
            }
        }   
    },
    PaymentStatus : {
        __resolveType: (o, c, i) => {
            if(o.billedAmount){
                return 'PaymentSuccess'
            }
            if(o.reason){
                return 'PaymentFailed'
            }
            return null
        }
    }
}