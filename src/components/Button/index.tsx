import type { ReactNode } from "react";

export default function Button({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} data-text-preset="6" data-uppercase>
      {children}
    </a>
  );
}
