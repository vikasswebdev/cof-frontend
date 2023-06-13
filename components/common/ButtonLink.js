import Image from "next/image";
import Link from "next/link";
import React from "react";

const ButtonLink = ({ title, to }) => {
  return (
    <Link href={to}>
      <div className="flex items-center border w-fit px-5  py-1 mt-6 rounded-3xl hover:bg-gray-100">
        <span className="">{title}</span>
        <div className="bg-gray-600  ml-2 w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
          <Image
            src="/images/icons/span-white.png"
            width={15}
            height={15}
            alt="arrow"
          />
        </div>
      </div>
    </Link>
  );
};

export default ButtonLink;
