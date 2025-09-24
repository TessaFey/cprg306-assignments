// Root/Home page
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className=" font-bold text-red-600">CPRG 306: Web Development 2 - Assignments</h1>
      <div>
      <Link
          href="/week-2"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
        week-2
        </Link>
        </div>
        <div>
        <Link
          href="/week-3"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
        week-3
        </Link>
        </div>
    </div>
    
  );
}
