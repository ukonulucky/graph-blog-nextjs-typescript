import Link from "next/link";
import React, { useContext } from "react";
import { categoryType } from "../types";

const category: categoryType = [
  {
    name: "Website Development",
    slug: "react",
  },
  {
    name: "Mobile Development",
    slug: "mobile",
  },
];
function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href={"/"}>
            <span className="cursor-pointer font-bold text-4xl text-white">
              Smart Tech
            </span>
          </Link>
         
        </div>
        <div className="hidden md:float-right md:contents">
            {category.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-white ml-4">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Header;
