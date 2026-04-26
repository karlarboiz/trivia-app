import type { ReactNode } from "react";

export interface ButtonProps {
  title: string;
  type: string;
  additionalClass?: string;
  children?: ReactNode | ReactNode[];
  onClick?: () => void;

}