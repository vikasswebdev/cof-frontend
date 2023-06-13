import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonLink from "./common/ButtonLink";

const ConnectSection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Image
            src="/images/M3_integrations_all_integrations.png"
            width={500}
            height={500}
            alt="integration connect"
          />
        </div>
        <div className="px-20">
          <h2 className="font-bold text-6xl">
            Connect your tools, close your tabs
          </h2>
          <p className="mt-4 text-gray-600">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <ButtonLink title="Learn more" to="/contactus" />
          {/* <Link href="/">
            <div className="flex items-center border w-fit px-4 py-1 mt-3 rounded-3xl">
              <span> Learn more</span>
              <div className="bg-gray-600  ml-2 w-10 h-10 flex items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/images/icons/span-white.png"
                  width={15}
                  height={15}
                  alt="arrow"
                />
              </div>
            </div>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;

// M3_integrations_all_integrations.png
