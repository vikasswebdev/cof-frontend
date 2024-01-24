import Image from "next/image";
import React from "react";
import img from "../../assets/main/undraw_server_cluster.svg";
import ButtonLink from "../common/ButtonLink";

const HomeTop = () => {
  return (
    <section className="container mx-auto flex p-4 py-20 flex-row items-center justify-between">
      <div>
        <h1 className="font-bold text-6xl">By Engineers For Entrepreneurs</h1>
        <p className="mt-5 w-3/4">
          We are committed to helping our clients achieve their goals and make
          their mark in the tech industry.
        </p>
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
