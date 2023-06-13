import Link from "next/link";
import React from "react";

const TopIntroCard = ({ integration }) => {
  return (
    <div className="bg-white bg-gradient-to-r from-gray-200 px-10 py-10 to-white rounded drop-shadow-lg">
      <div className="flex flex-col md:flex-row p-4">
        <div className="flex-1">
          <div>
            <div className="w-32 bg-red-300 rounded-full h-32 bg-[url('/dummy/chatgpt.jpg')] bg-no-repeat bg-center bg-cover"></div>
            <h1 className="text-4xl font-bold mt-3 ml-4">
              {integration.title}
            </h1>
          </div>
        </div>
        <div className="flex-1 p-4">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in
            at debitis nisi itaque modi corrupti consectetur amet? Iste quae
            maxime, tempora inventore amet quas veniam fugit pariatur debitis
            porro.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            dolorem id quas repellat voluptate corrupti quo eaque, officiis
            necessitatibus ad doloremque? Modi eligendi nam itaque sunt beatae
            necessitatibus aliquid voluptatibus.
          </p>
          <div className="mt-6">
            <Link
              href="/book-now"
              className="border text-xl border-gray-400 px-4 py-2 rounded hover:bg-black hover:text-white"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopIntroCard;
