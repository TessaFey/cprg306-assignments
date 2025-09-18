"use client";

import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-lg space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Student Info</h1>
      <p className="text-lg text-gray-700">
        <strong>Name:</strong> Tessa Rae Feyres
      </p>
      <div>
        <p className="text-lg font-medium text-gray-700 mb-2">GitHub Repository:</p>
        <Link
          href="https://github.com/your-username/your-repo"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          Visit My GitHub Repo
        </Link>
      </div>
    </div>
  );
}