import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Blog = {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  date: string;
};
const blogs: Blog[] = [
  {
    title:
      "Unlocking the Benefits and Rewards of Shab-e-Baraat : History and Essence",
    description: `Shab-e-Barat comes in Shaban, which is the eighth month of the Islamic Hijri calendar, preceding the holy month of Ramadan. It is a month of spiritual significance, preparation, and reflection for the upcoming month of fasting and devotion.`,
    image: "https://bakhlatours.com/wp-content/uploads/2024/02/1-200x113.jpg",
    url: "#",
    author: "Master",
    date: "21-01-2024",
  },
  {
    title:
      "Unlocking the Benefits and Rewards of Shab-e-Baraat : History and Essence",
    description: `Shab-e-Barat comes in Shaban, which is the eighth month of the Islamic Hijri calendar, preceding the holy month of Ramadan. It is a month of spiritual significance, preparation, and reflection for the upcoming month of fasting and devotion.`,
    image: "https://bakhlatours.com/wp-content/uploads/2024/02/1-200x113.jpg",
    url: "#",
    author: "Master",
    date: "21-01-2024",
  },
  {
    title:
      "Unlocking the Benefits and Rewards of Shab-e-Baraat : History and Essence",
    description: `Shab-e-Barat comes in Shaban, which is the eighth month of the Islamic Hijri calendar, preceding the holy month of Ramadan. It is a month of spiritual significance, preparation, and reflection for the upcoming month of fasting and devotion.`,
    image: "https://bakhlatours.com/wp-content/uploads/2024/02/1-200x113.jpg",
    url: "#",
    author: "Master",
    date: "21-01-2024",
  },
  {
    title:
      "Unlocking the Benefits and Rewards of Shab-e-Baraat : History and Essence",
    description: `Shab-e-Barat comes in Shaban, which is the eighth month of the Islamic Hijri calendar, preceding the holy month of Ramadan. It is a month of spiritual significance, preparation, and reflection for the upcoming month of fasting and devotion.`,
    image: "https://bakhlatours.com/wp-content/uploads/2024/02/1-200x113.jpg",
    url: "#",
    author: "Master",
    date: "21-01-2024",
  },
];

function Blogs() {
  return (
    <div className="py-10 px-10 sm:px-20 flex flex-col justify-center items-center">
      <h2 className="scroll-m-20 text-center text-3xl font-semibold tracking-tight first:mt-0 ">
        Our Blogs
      </h2>
      <div className="w-full mt-5 px-40 grid grid-cols-1 sm:grid-cols-2 place-items-center place-content-center gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.url} blog={blog} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ blog }: { blog: Blog }) {
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

export default Blogs;
