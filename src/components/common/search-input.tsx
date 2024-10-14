import React from 'react';
import { Icon } from './icon';

type SearchInputProps = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const SearchInput = ({ className = '', ...props }: SearchInputProps) => {
  return (
    <label
      className={`flex items-center gap-12 px-16 py-8 border-solid border-b-1 border-border text-18-400 bg-bg has-[:focus]:border-text-muted transition-all ${className}`}
    >
      <input className="w-full outline-none" {...props} />
      <Icon iconName={'search'} />
    </label>
  );
};
