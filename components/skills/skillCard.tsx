"use client";
import { Skill } from "@/types/skill";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
export default function SkillsCard({ Icon, title }: Skill) {
  return (
    <>
      <div className="flex px-4 py-1 gap-2">
        <TooltipProvider delayDuration={200}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Image
                src={Icon}
                width={50}
                height={50}
                sizes="500px"
                alt={title}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
