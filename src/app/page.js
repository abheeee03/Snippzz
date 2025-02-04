import SnippetList from "@/components/snippetList";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { MdOutlineAdd } from "react-icons/md";

export default async function Home() {

  const snippets = await prisma.snippet.findMany();



  return (
    <div className="container p-14">
      <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">CodeSnippets</h1>
      <Link href="/snippet/create">
      <button className="bg-black px-3 py-2 flex items-center justify-center gap-2 text-white rounded-lg hover:scale-105 transition-all">New Snippet <MdOutlineAdd />
      </button>
      </Link>
      </div>
      <SnippetList postList={snippets}/>
    </div>
  );
}
