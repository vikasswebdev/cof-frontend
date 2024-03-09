import Image from "next/image";
import React from "react";
import img from "../../assets/main/undraw_server_cluster.svg";
import ButtonLink from "../common/ButtonLink";
import styles from "../../styles/Home.module.css";

const HomeTop = () => {
  const stylesArray = [{ "--i": 1 }, { "--i": 2 }, { "--i": 3 }];
  return (
    // <section className="container mx-auto flex p-4 py-20 flex-row items-center justify-between">
    //   <div>
    //     <h1 className="font-bold text-6xl">By Engineers For Entrepreneurs</h1>
    //     <p className="mt-5 w-3/4">
    //       We are committed to helping our clients achieve their goals and make
    //       their mark in the tech industry.
    //     </p>
    //     <ButtonLink title="Let's start" to="/contactus" />
    //   </div>
    //   <Image
    //     src={img}
    //     alt="Our mission image"
    //     className="md:block hidden"
    //     height={500}
    //     width={500}
    //   />
    // </section>
    <section className="mx-auto flex p-4 py-20 flex-row items-center min-h-screen justify-center">
      <div className={styles.containerrrr}>
        <div className={styles.glowing}>
          {stylesArray.map((style, index) => (
            <span key={index} style={style}></span>
          ))}
        </div>
        <div className={styles.glowing}>
          {stylesArray.map((style, index) => (
            <span key={index} style={style}></span>
          ))}
        </div>
        <div className={styles.glowing}>
          {stylesArray.map((style, index) => (
            <span key={index} style={style}></span>
          ))}
        </div>
        <div className={styles.glowing}>
          {stylesArray.map((style, index) => (
            <span key={index} style={style}></span>
          ))}
        </div>
        <div className={styles.glowing}>
          {stylesArray.map((style, index) => (
            <span key={index} style={style}></span>
          ))}
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="text-center">
        <h1 className="font-bold md:text-6xl text-5xl">
          {/* Build AI  for generating more revenue */}
          Building an <br /> AI-powered products.
        </h1>
        <p className="mt-5">
          We are committed to helping our clients achieve their goals and make
          their mark in the tech industry.
        </p>
        <ButtonLink title="Let's start" to="/contactus" />
      </div>
    </section>
  );
};

export default HomeTop;
