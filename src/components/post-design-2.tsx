import { PostMokeData } from "@/const/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiOutlineClockCircle,
  AiOutlineEye,
  AiOutlinePlusCircle,
} from "react-icons/ai";

const PostDesign2 = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 ">
      {BooksData.map((item, idx) => {
        return (
          <div key={idx} className="group">
            <Link href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="_blank">
              <figure className="relative overflow-hidden rounded-xl ">
                <img
                  src={item?.img}
                  alt="image"
                  width={400}
                  height={400}
                  className="group-hover:scale-105 h-96 w-full object-fill object-bottom transition-all duration-200 ease-in-out"
                />
              </figure>
            </Link>
            {/* <div className="px-4">
              <div className="bg-white shadow-xl p-5 dark:bg-light-gray relative -mt-28 z-10 rounded-3xl overflow-hidden">
              <p className="text-yellow rounded-3xl font-ahle uppercase font-light ">
                books
              </p>
              <Link href="#">
                <h2 className="pb-4 group-hover:text-light-blue font-ahle text-lg">
                کتاب-و-سنت-کی-روشنی-میں-حیا-کا-مقام
                </h2>
              </Link>
              <div
                className=" flex gap-3 text-sm md:text-base justify-start w-full"
              >
                <span className="flex items-center gap-1">
                  <i>
                    <AiOutlineClockCircle />
                  </i>
                  2 .
                </span>
                <span className="flex items-center gap-1">
                  <i>
                    <AiOutlineEye className="text-lg" />
                  </i>
                  1.3k
                </span>
              </div>
              </div>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default PostDesign2;

export const BooksData = [
  {
    img: "/assets/images/book1.jpg",
  },
  {
    img: "/assets/images/book2.jpg",
  },
  {
    img: "/assets/images/book3.jpg",
  },
  {
    img: "/assets/images/book4.jpg",
  }
 
];