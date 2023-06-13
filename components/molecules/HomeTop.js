import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Roboto } from "@next/font/google";
import img from "../../assets/main/undraw_server_cluster.svg";
import IconCompo from "../atoms/IconCompo";
import ButtonLink from "../common/ButtonLink";

// const roboto = Roboto({
//   weight: ["700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

const HomeTop = () => {
  return (
    <section className="container mx-auto flex p-4 py-20 flex-row items-center justify-between">
      <div>
        <h1 className="font-bold text-6xl">By Engineers For Entrepreneurs</h1>
        <p className="mt-5 w-3/4">
          We are committed to helping our clients achieve their goals and make
          their mark in the tech industry.
        </p>
        {/* <div className="mt-10  hover:text-black border mr-20 md:mr-96 border-black text-center text-white hover:bg-white text-xl bg-black px-10 py-2 rounded shadow-sm">
          <Link href="/contactus">Let&apos;s Start</Link>
        </div> */}
        <ButtonLink title="Let's start" to="/contactus" />
      </div>
      <Image
        src={img}
        alt="Our mission image"
        className="md:block hidden"
        height={500}
        width={500}
      />
    </section>
  );
};

export default HomeTop;
