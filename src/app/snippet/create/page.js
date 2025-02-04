import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';

const CreateSnipper = () => {


  async function createSnippet(formData) {
    "use server"
    const title = formData.get("title");
    const code = formData.get("code");

    const snippet = await prisma.snippet.create({
      data:{
        title,
        code
      }
    });
    console.log(snippet);
    redirect("/")
    
  }
    


  return (
    <div className='p-16 flex flex-col gap-20 justify-center items-center'>
      <Link className='text-xl absolute flex items-center justify-center hover:scale-105 transition-all top-5 left-5' href={'/'}>
      <IoIosArrowBack /> Back
      </Link>
        <h1 className='text-2xl font-bold'>Create New Code Snippet</h1>
        <form className='flex flex-col justify-center items-center gap-5 w-1/2' action={createSnippet}>
            <input type='text' name='title' className='border-gray-400 border-2 w-full p-2' placeholder='Enter Title'/>
            <textarea name='code' rows={13} className='border-gray-400 border-2 w-full p-2' placeholder='Enter Code'></textarea>
            <input type='submit' value={'Create'} className='bg-black px-3 py-2 text-white rounded-lg hover:scale-105 transition-all cursor-pointer' />
        </form>
    </div>
  )
}

export default CreateSnipper