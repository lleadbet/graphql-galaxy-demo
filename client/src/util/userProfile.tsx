import { Loading } from "./Loading"
import { User } from "./types"
import {useQuery} from '@apollo/client';
import { DocumentNode } from "graphql";

type UserProfileProps ={
    query: DocumentNode
}
export const UserProfile = ({query}:UserProfileProps) => {
    const {data, loading, error} = useQuery(query,{
      fetchPolicy: 'no-cache'
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
        {data.users.map((v: User)=>{
          return (
            <div key={v.id}>
                <div className="flex flex-row items-center">
                    <img src={v.avatarUrl} alt="user profile" className="w-16 pr-2"/>
                    <div>
                        <p className='font-bold'>{v.name}</p>
                        <p className='font-italic'>{v.title}</p>
                        <p>@{v.username.toLocaleLowerCase()}</p>
                    </div>
                </div>

              <div>
                <p>Friends:</p>
                {v.friends && v.friends.map(f=>{
                  return(
                    <div>
                      {f.name}
                    </div>
                  )
                })}
                {!v.friends && (<Loading />)}
              </div>
              <hr className='pb-2'/>
            </div>
          )
        })}
      </div>
    )
}