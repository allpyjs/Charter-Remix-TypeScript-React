import { ReactNode } from "react";

interface SideBarBtnProps {
  title?: string;
  url?: string;
  children: ReactNode;
}

export default function SideBarBtn({
  title,
  url,
  children,
}: SideBarBtnProps): JSX.Element {
  return (
    <a
      href={url}
      title={title}
      className="flex flex-col items-center justify-center gap-1 transition-all duration-300 ease-in-out hover:text-yellow-500 hover:sm:scale-150"
    >
      {children}
    </a>
  );
}
