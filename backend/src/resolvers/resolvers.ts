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
            return getSpecificUser(a.userId)
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
        friends: async (p,a,c,i)=> {
            console.log(a)
            await wait(a.first * 100)
            return generateUsers(4)
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