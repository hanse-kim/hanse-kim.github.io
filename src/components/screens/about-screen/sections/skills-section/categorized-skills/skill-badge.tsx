import React, { useState } from 'react';
import { useClientSize } from 'src/hooks/use-client-size';
import { SkillInfo } from '..';

type SkillBadgeProps = SkillInfo & {};

export const SkillBadge = ({ label, logo, descriptions }: SkillBadgeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const descriptionsClientSize = useClientSize<HTMLUListElement>();
  const isInvert = ['Next.js'].includes(label);

  return (
    <button
      className="flex flex-col max-w-full bg-text rounded-8 shrink-0 group dark:bg-bg border-solid border-1 border-text dark:border-text-muted select-none h-fit"
      onClick={() => setIsOpen((prev) => !prev)}
      data-open={isOpen}
    >
      <div className="flex items-center gap-12 px-16 py-8">
        <div
          className="w-28 h-28 shrink-0 grayscale brightness-125 data-[invert=true]:invert group-hover:invert-0 group-hover:brightness-100 group-hover:grayscale-0 group-data-[open=true]:invert-0 group-data-[open=true]:brightness-100 group-data-[open=true]:grayscale-0 transition-all"
          data-invert={isInvert}
        >
          {logo}
        </div>
        <p className="text-18-400 text-bg dark:text-text text-nowrap">
          {label}
        </p>
      </div>

      <div
        className="transition-all -mx-1 max-w-[calc(100%+2px)]"
        style={{
          width: isOpen ? descriptionsClientSize.size[0] : 0,
          height: isOpen ? descriptionsClientSize.size[1] : 0,
        }}
      >
        <ul
          ref={descriptionsClientSize.assignRef}
          className="pb-16 px-16 group-data-[open=false]:absolute group-data-[open=false]:opacity-0 group-data-[open=false]:pointer-events-none transition-opacity text-left duration-500 group-data-[open=false]:duration-0 list-disc desktop:max-w-[30vw] tablet:max-w-[45vw] mobile:max-w-full"
        >
          {descriptions.map((description, index) => (
            <li
              key={index}
              className="text-bg dark:text-text text-18-400 ml-24 mt-4"
            >
              {description}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};
