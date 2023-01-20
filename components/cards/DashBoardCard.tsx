import Link from "next/link";
import React from "react";

type Cards = {
  link: string;
  title: string;
  description: string;
};

export default function DashBoardCard({ link, title, description }: Cards) {
  return (

      <div>
        <Link href={link}>

          <div className="border h-36 text-gray-700  border-gray-200 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-md font-medium title-font mb-2">
              {title}
            </h2>
            <p className="leading-relaxed text-sm">{description}</p>
          </div>

      </Link>
      </div>

  );
}
