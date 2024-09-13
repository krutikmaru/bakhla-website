import Image from "next/image";
import Link from "next/link";
import blogs from "@/lib/data/blogs";
import BlogCard from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";

const BLOGS_PER_PAGE = 6;

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);

  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const endIndex = startIndex + BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, endIndex);

  return (
    <div className="mt-[92px]">
      <div className="w-full h-[500px] relative flex items-center justify-center">
        <Image
          src="/images/banners/blogs.webp"
          alt="Blogs Banner"
          fill
          className="absolute left-0 object-left object-cover"
        />
      </div>
      <div className="w-full mt-5 grid grid-cols-1 sm:grid-cols-2 place-items-center place-content-center gap-5 px-6 sm:px-10 md:px-20 lg:px-40 py-10">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.url} blog={blog} />
        ))}
      </div>
      <div className="flex justify-center items-center space-x-2 my-8">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link key={page} href={`?page=${page}`} passHref>
            <Button
              variant={currentPage === page ? "default" : "outline"}
              className={`w-10 h-10 ${
                currentPage === page && "bg-bakhla-red hover:bg-bakhla-red"
              }`}
            >
              {page}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
