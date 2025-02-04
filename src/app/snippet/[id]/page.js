import React from 'react'

const SnippetDetail = async ({params}) => {

  const id = (await params).id


  return (
    <div className='container p-16'>
        <h1 className='text-3xl'>Post no: {id} </h1>
        <pre className='p-4 mt-5 bg-gray-200'>
          <code>
            Code goes here
          </code>
        </pre>
    </div>
  )
}

export default SnippetDetail