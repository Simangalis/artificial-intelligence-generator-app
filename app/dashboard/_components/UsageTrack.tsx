
"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

import React, { useEffect } from 'react'


 function UsageTrack() {

  //const {user}=useUser();
 // const[TotalUsage,setTotalUsage]=useState<number>();>

 //useEffect(()=>{
   // user&&GetData();
  //},[user])

 // const GetData=async()=>{
    
 // const result:HISTORY=await db.select().from(AIOutput)
 // .where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))

  //GetTotalUsage(result)
 // }

  // const GetTotalUsage=(result:HISTORY)=>{
//let total:number=0;
//result.forEach(element =>{
  //total=total+Number(element.aiResponse?.length)

   // })
 // }

 // setTotalUsage(total)
 // console.log(total)


  return (
    <div className='m-5'>
      <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>The Power of AI</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
          <div className='h-2 bg-white rounded-full'
           style={{
            width:'100%'
          }}>
           
          </div>
        </div>
        <div>
        <h2 className='text-sm my-2'>Use and learn from it</h2>
      </div>
      </div>

     <Button variant={'secondary'} className='w-full my-3 text-primary'>DEVELOPED BY <br/>Simangaliso Mncwango</Button>
    
    </div>
  )
}

export default UsageTrack
