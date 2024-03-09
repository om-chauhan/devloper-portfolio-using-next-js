"use client";
import { FaLinkedinIn, FaGithub, FaCoffee } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pl-10 pt-10 pr-10 pb-20 lg:flex w-full h-full items-center justify-between  ">
      {/* Hero Left Side */}
      <div className="mb-10 xl:flex-col ">
        <h1 className="uppercase text-[60px] font-bebas font-extrabold tracking-tight  lg:text-[100px] leading-[90px] ">
          Hi, i am Omprakash Chauhan
        </h1>
        <p className="font-manrope">
          "✨ I don't just code apps, I paint them with Flutter."
        </p>
        <div className="h-10 xl:h-5" />
        <div className="flex gap-5">
          <Link href="mailto:omi8655@gmail.com">
            <div className="uppercase bg-[#D3E97A] rounded-[100px] h-[54px] w-[190px] flex justify-evenly items-center">
              <p className="text-[#0A0A0A] text-[16px] items-center">
                Contact Me
              </p>
              <MdAlternateEmail className="text-black h-[26px] w-[26px]" />
            </div>
          </Link>
          <Link href="https://github.com/om-chauhan" target="_blank">
            <div className="rounded-full h-[54px] w-[54px] bg-[#222222] flex justify-center items-center">
              <FaGithub className="text-[#D3E97A] h-[26px] w-[26px]" />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/omprakash-chauhan/"
            target="_blank">
            <div className="rounded-full h-[54px] w-[54px] bg-[#222222] flex justify-center items-center">
              <FaLinkedinIn className="text-[#D3E97A] h-[26px] w-[26px]" />
            </div>
          </Link>

          {/* <Link href="https://twitter.com/_Omi_Op" target="_blank">
            <div className="rounded-full h-[54px] w-[54px] bg-[#222222] flex justify-center items-center">
              <FaTwitter className="text-[#D3E97A] h-[26px] w-[26px]" />
            </div>
          </Link> */}
        </div>
        <div className="h-5 " />
        <div>
          <Link href="https://www.buymeacoffee.com/omiorop">
            <div className=" bg-[#FFDD00] rounded-[100px] h-[54px] w-[210px] flex justify-evenly items-center">
              <FaCoffee className="text-black h-[26px] w-[26px]" />
              <p className="text-[#0A0A0A] text-[16px] items-center text-lg font-medium">
                Buy Me a Coffee
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* End Hero Left Side */}

      {/* Author Image */}
      <Image
        src="/images/profile-picture.webp"
        alt="Profile Picture"
        width={500}
        height={500}
        className="w-full h-[700px] object-cover rounded-full lg:w-[600px] flex items-center"
        sizes="(min-width: 600px) 500px, 500px"
        quality={100}
        unoptimized
      />

      {/* End Author Image */}
    </section>
  );
}
