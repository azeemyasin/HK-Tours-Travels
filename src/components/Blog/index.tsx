import React from "react";

const Blog: React.FC = () => {
  return (
    <>
      <div className="w-full h-[500px] bg-[url(/images/blogs/banner.jpg)] bg-center bg-cover bg-no-repeat flex justify-center items-center">
        <div className="top-0 w-full h-full bg-black opacity-60 relative"></div>
        <div className="text-white absolute flex flex-col items-center sm:px-0 px-5">
          <h1 className="text-white uppercase lg:text-6xl sm:text-5xl text-3xl font-medium font-yatra-one text-center">
            blogs
          </h1>
        </div>
      </div>
    </>
  );
};

export default Blog;
