import Link from 'next/link'
import React from 'react'

const SnippetList = () => {
  return (
    <div className='flex flex-col gap-3 p-4 mt-5 items-center justify-center'>
        <div className='flex justify-between items-center w-full bg-gray-200 p-3'>
            <h1 className='text-xl'>
                List Name Here
            </h1>
        <Link href='' className='underline text-md'>View More</Link>
        </div>
    </div>
  )
}

export default SnippetList