//Week 5 landing page

import NewItem from "./new-items";

export default function Page() {
  return (
    <main className=" bg-black">
      <div className="bg-black border-2 border-blue-500 p-4 rounded-lg inline-block">
        <NewItem />
      </div>
    </main>
  );
}