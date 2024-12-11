import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function copy (value: string, cb:()=>void) {
  navigator.clipboard.writeText(value).then(() => {
    cb&&cb()
  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });
};
