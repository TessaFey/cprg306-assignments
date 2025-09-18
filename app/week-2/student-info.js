//student info page

"use client";

import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="bg-black-200 border-2 border-blue-500 p-4 rounded-lg inline-block">
        {/* //Adding a box for visibility because i work in dark mode */}
      <h1 className=" font-bold text-red-600">Student Info</h1>
      <p className=" text-red-600">
        <strong>Name:</strong> Tessa Rae Feyres
      </p>
      <div>
        <p className="text-lg font-medium text-red-700">GitHub Repository:</p>
        <Link
          href="https://github.com/TessaFey/cprg306-assignments"
          //Placeholder link for now
          className="text-blue-600 hover:underline"
          target="_blank"
        >
        GitHub Repo
        </Link>
      </div>
    </div>
  );
}