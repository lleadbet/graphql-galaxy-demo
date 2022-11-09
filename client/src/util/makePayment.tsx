import { useMutation, useQuery } from "@apollo/client"
import { DocumentNode } from "graphql"
import { Loading } from "../util/Loading"
import { User } from "../util/types"

type UserProfileProps ={
    query: DocumentNode
}

const variables = {
    userId: "1",
    paymentInformation: {
        fakeInfo: "demo"
    }
}

export const MakePayment = ({query}:UserProfileProps) => {
    const [makePayment, {data, loading, error}] = useMutation(query,{
      fetchPolicy: 'no-cache',
    })
    console.log(data, loading, error)

    if(loading){
        return <Loading />
    }else if(error){
      return (
        <div>error.message</div> 
      )
    }
    return(
      <div>
        {!data && !loading &&
            <>
                <button onClick={()=>makePayment({variables})}>Make Payment</button>
            </>
        }
        {data && 
            <>
                {JSON.stringify(data)}
            </>
        }
      </div>
    )
}