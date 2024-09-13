import { Blog } from "@/lib/types";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="w-full min-h-[450px] rounded-md border-[1px] border-neutral-200 p-5">
      <div className="w-full h-[150px] rounded-md overflow-hidden relative mb-2">
        <Image
          src={blog.image}
          fill
          alt="Cover"
          className="absolute object-cover"
        />
      </div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-bakhla-red">
        {blog.title}
      </h4>
      <div className="flex items-center space-x-4 py-2 text-neutral-500">
        <div className="flex items-center space-x-1">
          <User size={16} />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar size={16} />
          <span>{blog.date}</span>
        </div>
      </div>
      <div className="w-full h-[100px] mb-3 text-neutral-700 text-sm overflow-hidden">
        {blog.description}
      </div>
      <Link href={blog.url}>
        <Button className="bg-bakhla-red hover:bg-bakhla-red/90">
          Read More
        </Button>
      </Link>
    </div>
  );
}
