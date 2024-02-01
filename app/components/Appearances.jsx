import React from "react";
import Image from "next/image";

const Appearances = () => {
  return (
    <>
      <span className="items-center justify-between text-center text-xl text-bold">
        I&apos;ve been interviewed by:
      </span>
      <div className="items-center justify-between flex">
        <Image
          src="/amag.jpg"
          alt="Authority Magazine logo"
          width={200}
          height={200}
        />
        <Image
          src="/Newsweek_Logo.svg"
          alt="newsweek logo"
          width={300}
          height={300}
        />
        <Image
          src="/nerdwalletlogo.svg"
          alt="Authority Magazine logo"
          width={300}
          height={300}
        />
      </div>
      \
    </>
  );
};

export default Appearances;
