import { MakePaymentDeferred } from "./deferred/makePayment"
import { MakePaymentRegular } from "./regular/makePayment"

export const PaymentDemo = () => {
    return(
        <>
            <div className='flex flex-col justify-items-center dark:bg-slate-800 p-4'>
                <p className='text-2xl'>Normal:</p>
                <MakePaymentRegular />
            </div>
            <div className='flex flex-col justify-items-center dark:bg-slate-800 p-4'>
                <p className='text-2xl'>Deferred:</p>
                <MakePaymentDeferred />
            </div>
        </>
    )
}