/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
// import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-8xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  svg,
  index
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
  svg?: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        "", // Add this line
        className
      )}
    >
      <span className="text-2xl font-bold mb-6">
        {header}
      </span>

      <div className={index === 0 ? "absolute w-1/2 overflow-hidden right-2 -z-10" : "absolute w-[65%]  right-16 top-10 m-4 -z-10 !mt-8"}>
        {svg}

      </div>
      {/* <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-300 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-300 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div> */}
    </div>
  );
};
