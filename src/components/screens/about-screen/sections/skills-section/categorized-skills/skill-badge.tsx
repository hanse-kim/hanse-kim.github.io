import React, { useState } from 'react';
import { useClientSize } from 'src/hooks/use-client-size';
import { SkillInfo } from '..';
import { RichText } from 'src/components/common/rich-text';

type SkillBadgeProps = SkillInfo & {};

export const SkillBadge = ({ label, logo, descriptions }: SkillBadgeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const descriptionsClientSize = useClientSize<HTMLUListElement>();
  const isInvert = ['Next.js'].includes(label);

  return (
    <button
      className="flex flex-col max-w-full border-solid select-none bg-text rounded-8 shrink-0 group dark:bg-bg border-1 border-text dark:border-text-muted h-fit"
      onClick={() => setIsOpen((prev) => !prev)}
      data-open={isOpen}
    >
      <div className="flex items-center gap-12 px-16 py-8">
        <div
          className="w-28 max-h-28 flex items-center shrink-0 grayscale brightness-125 data-[invert=true]:invert desktop:group-hover:invert-0 desktop:group-hover:brightness-100 desktop:group-hover:grayscale-0 group-data-[open=true]:invert-0 group-data-[open=true]:brightness-100 group-data-[open=true]:grayscale-0 transition-all"
          data-invert={isInvert}
        >
          {logo}
        </div>
        <p className="text-18-400 text-bg dark:text-text text-nowrap">
          {label}
        </p>
      </div>

      <div
        className="-mx-1 transition-all duration-300 ease-in"
        style={{
          width: isOpen ? descriptionsClientSize.size[0] : 0,
          height: isOpen ? descriptionsClientSize.size[1] : 0,
        }}
      >
        <ul
          ref={descriptionsClientSize.assignRef}
          className="pb-16 px-16 group-data-[open=false]:absolute group-data-[open=false]:opacity-0 group-data-[open=false]:pointer-events-none transition-opacity text-left duration-500 group-data-[open=false]:duration-0 list-disc w-full max-w-[calc(calc(min(100vw,67.5rem)-3rem-1em)/2)] mobile:max-w-[calc(100vw-3rem)]"
        >
          {descriptions.map((description, index) => (
            <li
              key={index}
              className="mt-8 ml-24 text-bg dark:text-text text-18-400"
            >
              <RichText value={description} />
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};
