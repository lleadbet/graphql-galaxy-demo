import { UserProfileDeferred } from "./deferred/userProfile"
import { UserProfileRegular } from "./regular/userProfile"

export const UserDemo = () => {
    return(
        <>
            <div className='flex flex-col justify-items-center dark:bg-slate-800 p-4'>
                <p className='text-2xl'>Normal:</p>
                <UserProfileRegular />
            </div>
            <div className='flex flex-col justify-items-center dark:bg-slate-800 p-4'>
                <p className='text-2xl'>Deferred:</p>
                <UserProfileDeferred />
            </div>
        </>
    )
}