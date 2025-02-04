import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const SnippetDetail = async ({params}) => {

  const id = parseInt((await params).id)

  const snippet = await prisma.snippet.findUnique({
    where: {
      id
    }
  })

  return (
    <div className='container p-16'>
      <Link className='text-xl absolute flex items-center justify-center hover:scale-105 transition-all top-5 left-5' href={'/'}>
      <IoIosArrowBack /> Back
      </Link>

        <h1 className='text-3xl'>{snippet.title} </h1>
        <pre className='p-4 mt-5 bg-gray-200'>
          <code>
            {
              snippet.code
            }
          </code>
        </pre>
    </div>
  )
}

export default SnippetDetail