import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'

const SnippetList = async ({postList}) => {

  return (
    <div className='flex flex-col gap-3 p-4 mt-5 items-center justify-center'>
        {
            postList.map((snippet, id)=>(
                <Link key={id} href={`/snippet/${snippet.id}`} className='flex justify-between items-center w-full hover:scale-[1.01] transition-all bg-gray-200 p-3'>
                <h1 className='text-xl'>
                {snippet.title}
                </h1>
                <h4 className='underline text-md'>View Code</h4>
                </Link>
            ))
        }
        
    </div>
  )
}

export default SnippetList