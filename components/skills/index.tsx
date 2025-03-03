"use client";
import SkillCard from "./skillCard";
import skillData from "./skillData";

export default function Skills() {
  return (
    <>
      <section id="skills" className="px-10 lg:px-[100px] pb-[120px] pt-[20px]">
        <div className="flex-auto pb-20 gap-10 lg:flex">
          {/* Left Image Card */}
          <div className="w-full">
            <h1 className="uppercase text-[60px] font-bebas font-extrabold tracking-tight  lg:text-[100px] leading-[90px] ">
              My Skills
            </h1>
          </div>
          {/* End Left Image Card */}

          {/* Right Information Card */}
          <div className="flex-col justify-start items-start mt-10 w-full">
            {/* <p className="font-manrope text-[32px] font-medium">
              I am always looking to add more skills.Morbi egestas neque eu
              blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at
              purus faucibus tristique ut et dolor.
            </p>
            <div className="h-[16px]" /> */}
            <p className="font-manrope text-[16px] font-regular text-[#C7C7C7] leading-8">
            I am a passionate Flutter developer, always eager to learn and enhance my skills in building beautiful and efficient mobile apps.
            </p>
            <div className="h-[16px]" />
            {/* Skill Card */}
            <div className="flex flex-wrap items-center gap-4">
              {skillData.map((skill, index) => (
                <SkillCard key={index} Icon={skill.Icon} title={skill.title} />
              ))}
            </div>
          </div>
          {/* End Right Information Card */}
        </div>
      </section>
    </>
  );
}
