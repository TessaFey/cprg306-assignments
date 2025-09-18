// week 2 landing page

import StudentInfo from "./student-info";

export default function Page() {
    
return (
<main>
    <div className="bg-black border-2 border-blue-500 p-4 rounded-lg inline-block">
        <h1 className="text-red-600 bg-black border-blue-500 p-4 rounded-lg inline-block">Shopping List</h1>
    </div>
<StudentInfo></StudentInfo>
</main>
);
}