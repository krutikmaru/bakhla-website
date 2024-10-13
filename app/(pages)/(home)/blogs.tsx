import BlogCard from "@/components/ui/blog-card";
import blogs from "@/lib/data/blogs";
import Link from "next/link";
import React from "react";

function Blogs() {
  return (
    <div className="py-10 px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col justify-center items-center max-w-[1900px] mx-auto">
      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 ">
        Our Blogs
      </h2>
      <Link href={"/blogs"} className="text-bakhla-red underline my-2">
        View All
      </Link>
      <div className="w-full max-w-4xl mt-5 grid grid-cols-1 sm:grid-cols-2 place-items-center place-content-center gap-5">
        {blogs.slice(0, 4).map((blog) => (
          <BlogCard key={blog.url} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
