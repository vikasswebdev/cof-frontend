import React, { useState } from "react";
import Layout from "../components/layout";
import { toast } from "react-toastify";
import { fetchAPI } from "../lib/api";
import Seo from "../components/seo";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async () => {
    try {
      if (name == "" || email == "" || message == "") {
        toast.error("please fill form correctly!");
        return;
      } else if (name.length < 3) {
        toast.warning("Enter name correctly!");
        return;
      } else if (email.length < 6) {
        toast.warning("Enter email address correctly!");
        return;
      }

      // toast.success("Successfully Submitted");
      // return;

      const response = await fetchAPI("/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      console.log("response", response);

      if (response && response.status == 1) {
        toast.success(response.message);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      toast.error("somthing went Wrong!");
    }
  };

  return (
    <Layout>
      <Seo
        seo={{
          metaTitle: "Contact Us",
        }}
      />
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Let&apos;s connect
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Have an Idea, Let&apos;s discuss
            </p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button
                  onClick={submitHandler}
                  class="flex mx-auto text-white bg-black border-0 py-2 px-8 focus:outline-none hover:bg-gray-800 rounded text-lg"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contactus;
