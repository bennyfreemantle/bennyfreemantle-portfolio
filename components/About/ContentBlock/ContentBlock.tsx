import React, { ReactNode } from "react";

export default function ContentBlock({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="w-full">
      <h3 className="py-4 text-2xl underline decoration-blue-300 decoration-2">
        {title}
      </h3>
      {children}
    </div>
  );
}
