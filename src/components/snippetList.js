import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

const SnippetList = async ({postList}) => {

  return (
    <div className='flex flex-col gap-3 p-4 mt-5 items-center justify-center'>
        {
            postList.map((snippet, id)=>(
                <div key={id} className='flex justify-between items-center w-full bg-gray-200 p-3'>
                <h1 className='text-xl'>
                {snippet.title}
                </h1>
                <Link href={`/snippet/${snippet.id}`} className='underline text-md'>View More</Link>
                </div>
            ))
        }
        
    </div>
  )
}

export default SnippetList