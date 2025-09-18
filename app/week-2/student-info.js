"use client";

import Link from "next/link";

export default function StudentInfo() {
  return (
    <div >
      <h1 className=" font-bold text-red-600">Student Info</h1>
      <p className=" text-red-600">
        <strong>Name:</strong> Tessa Rae Feyres
      </p>
      <div>
        <p className="text-lg font-medium text-red-700">GitHub Repository:</p>
        <Link
          href="https://www.youtube.com/watch?v=rMmziyTS3YI"
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