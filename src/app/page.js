import SnippetList from "@/components/snippetList";
import Link from "next/link";

export default function Home() {

  



  return (
    <div className="container p-14">
      <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">CodeSnippets</h1>
      <Link href="/snippet/create">
      <button className="bg-black px-3 py-2 text-white rounded-lg hover:scale-105 transition-all">New Snippet</button>
      </Link>
      </div>
      <SnippetList/>
    </div>
  );
}
