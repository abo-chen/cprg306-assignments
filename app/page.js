import Image from "next/image";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main class="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li><a href="week2">week2</a></li>
          <li>week3</li>
          <li>week4</li>
        </ul>
      </div>
    </main>
  );
}
