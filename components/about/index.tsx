"use client";
export default function About() {
  return (
    <>
      <section id="about" className="px-10 lg:px-[100px] pb-[120px] pt-[20px]">
        <div className="flex-auto pb-20 gap-10 lg:flex">
          {/* Left Image Card */}
          <div className="w-full">
            <h1 className="uppercase text-[60px] font-bebas font-extrabold tracking-tight lg:text-[100px] leading-[90px] ">
              About Me
            </h1>
          </div>
          {/* End Left Image Card */}

          {/* Right Information Card */}
          <div className="flex-col justify-start items-start mt-10 w-full">
            <p className="font-manrope text-[32px] font-medium">
              I am a Flutter developer based in India. Has Computer Engineering
              background.
            </p>
            <div className="h-[16px]" />
            <p className="font-manrope text-[16px] font-regular text-[#C7C7C7] leading-8">
              I'm a passionate Flutter developer who loves crafting stunning and
              performant mobile apps. I'm obsessed with clean code,
              pixel-perfect UIs, and pushing the boundaries of what's possible
              with Flutter. When I'm not coding, you'll find me tinkering with
              new technologies, contributing to open source projects, or
              exploring the great outdoors. Let's connect and build something
              awesome together!
            </p>
          </div>
          {/* End Right Information Card */}
        </div>
      </section>
    </>
  );
}
