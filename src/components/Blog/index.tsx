import React from "react";
import BlogGrid from "@/components/Blog/BlogGrid";

const Blog: React.FC = () => {
  return (
    <>
      <div className="w-full sm:h-[500px] h-[400px] bg-[url(/images/blogs/banner.jpg)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="top-0 w-full h-full bg-black opacity-60 relative"></div>
        <div className="text-white absolute flex flex-col items-center sm:px-0 px-5">
          <h1 className="text-white uppercase lg:text-6xl sm:text-5xl text-4xl font-medium font-yatra-one text-center">
            blogs
          </h1>
        </div>
      </div>
    <div className="py-16">
      <BlogGrid/>
    </div>
    </>
  );
};

export default Blog;
