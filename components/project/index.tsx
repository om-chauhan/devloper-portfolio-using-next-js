"use client";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { BiSolidStore } from "react-icons/bi";
import Image from "next/image";
import ProjectsData from "./projectData";
import Link from "next/link";
export default function Project() {
  return (
    <section id="projects">
      {/* Top Heading, Description off Features Project */}
      <div className="flex w-full px-10 items-center justify-between pt-10 pb-20 lg:px-[100px]">
        <div className="flex-col">
          <h1 className="uppercase text-[76px] font-bebas tracking-tighter ">
            Featured Projects
          </h1>
          <p className="font-manrope">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
      </div>
      {/* End Top Heading, Description off Features Project */}
      {/* Project Card */}
      <div className="px-10 lg:px-[100px] pb-[120px] ">
        {ProjectsData.map((item) => (
          <div key={item.id} className="flex-auto pb-20 gap-10 lg:flex">
            {/* Left Image Card */}
            <div className="w-full">
              <div className="p-5 h-auto w-auto bg-[#1A1A1A] rounded-xl items-center justify-center flex relative lg:p-20 object-cover">
                <Image
                  src={item.thumbnails}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="rounded-xl"
                  layout="responsive"
                  sizes="(min-width: 768px) 200px, 200px"
                  unoptimized
                />
                <div className="bg-[#D3E97A] px-[16px] py-[8px] absolute left-[30px] top-[30px] rounded-xl lg:top-5">
                  <p className="text-black">{item.projectType}</p>
                </div>
              </div>
            </div>
            {/* End Left Image Card */}

            {/* Right Information Card */}
            <div className="flex-col justify-start items-start mt-10 w-full">
              <div className="flex gap-5 items-center">
                <p className="font-manrope text-[32px] font-medium">
                  {item.title}
                </p>
                {item.appLogo && (
                  <Image
                    src={item.appLogo}
                    alt={item.title}
                    width={50}
                    height={50}
                    className="rounded-xl"
                    unoptimized
                  />
                )}
              </div>
              <div className="h-[16px]" />
              <p className="font-manrope text-[16px] font-regular text-[#C7C7C7] leading-8">
                {item.description}
              </p>
              <div className="h-[32px]" />
              <p className="uppercase font-manrope text-[16px] font-semibold">
                Project Info
              </p>
              {item.downloadCounts && <div className="h-[16px]" />}
              {item.downloadCounts && (
                <div className="bg-[#484848] h-[1px] w-full " />
              )}
              {item.downloadCounts && <div className="h-[16px]" />}
              {item.downloadCounts && (
                <div className="flex justify-between">
                  <p className="font-manrope text-[16px] font-medium">
                    Downloads
                  </p>
                  <p className="font-manrope text-[16px] font-medium text-[#C7C7C7]">
                    {item.downloadCounts}
                  </p>
                </div>
              )}
              <div className="h-[16px]" />
              <div className="bg-[#484848] h-[1px] w-full " />
              <div className="h-[16px]" />
              <div className="flex justify-between">
                <p className="font-manrope text-[16px] font-medium">Tags</p>
                <div className="flex-wrap gap-5">
                  {item.tags.map((tag) => (
                    <p
                      key={tag}
                      className="font-manrope text-[16px] font-medium text-[#C7C7C7]">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="h-[16px]" />
              <div className="bg-[#484848] h-[1px] w-full " />
              <div className="h-[48px]" />
              <div className="gap-[30px] flex-wrap lg:flex">
                {item.demo && (
                  <Link href={item.demo} target="_blank">
                    <div className="flex-col">
                      <div className="flex justify-start">
                        <p className="uppercase text-[#D3E97A] font-manrope text-[16px] font-medium ">
                          Live Demo
                        </p>
                        <div className="w-[5px]" />
                        <BsFillArrowUpRightCircleFill className="text-[#D3E97A] h-[20px] w-[20px] " />
                      </div>
                      <div className="bg-[#D3E97A] h-[2px] w-[110px] " />
                    </div>
                  </Link>
                )}
                {/* <div className="w-[30px]" /> */}
                {item.github && (
                  <Link href={item.github} target="_blank">
                    <div className="flex-col">
                      <div className="flex justify-start">
                        <p className="uppercase text-[#D3E97A] font-manrope text-[16px] font-medium ">
                          See on GitHub
                        </p>
                        <div className="w-[5px]" />
                        <FaGithub className="text-[#D3E97A] h-[20px] w-[20px] " />
                      </div>
                      <div className="bg-[#D3E97A] h-[2px] w-[140px] " />
                    </div>
                  </Link>
                )}
                {/* <div className="w-[30px]" /> */}
                {item.playStore && (
                  <Link href={item.playStore} target="_blank">
                    <div className="flex-col">
                      <div className="flex justify-start">
                        <p className="uppercase text-[#D3E97A] font-manrope text-[16px] font-medium ">
                          Play Store
                        </p>
                        <div className="w-[5px]" />
                        <FaGooglePlay className="text-[#D3E97A] h-[20px] w-[20px] " />
                      </div>
                      <div className="bg-[#D3E97A] h-[2px] w-[110px] " />
                    </div>
                  </Link>
                )}
                {/* <div className="w-[30px]" /> */}
                {item.miStore && (
                  <Link href={item.miStore} target="_blank">
                    <div className="flex-col">
                      <div className="flex justify-start">
                        <p className="uppercase text-[#D3E97A] font-manrope text-[16px] font-medium ">
                          Other Store
                        </p>
                        <div className="w-[5px]" />
                        <BiSolidStore className="text-[#D3E97A] h-[20px] w-[20px] " />
                      </div>
                      <div className="bg-[#D3E97A] h-[2px] w-[120px] " />
                    </div>
                  </Link>
                )}
              </div>
            </div>
            {/* End Right Information Card */}
          </div>
        ))}
      </div>
    </section>
  );
}
