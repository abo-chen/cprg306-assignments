import Link from "next/link";
import StudentInfo from "./StudentInfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <ul>
          <li><Link href="week2">week2</Link></li>
          <li><Link href="week3">week3</Link></li>
          <li><Link href="week4">week4</Link></li>
          <li><Link href="week5">week5</Link></li>
          <li><Link href="week6">week6</Link></li>
          <li><Link href="week7">week7</Link></li>
          <li><Link href="week8">week8</Link></li>
          <li><Link href="week9">week9</Link></li>
          <li><Link href="week10">week10</Link></li>
          <li><Link href="week11">week11</Link></li>
          <li><Link href="week12">week12</Link></li>
          <li><Link href="week13">week13</Link></li>
          <li><Link href="week14">week14</Link></li>
          <li><Link href="week15">week15</Link></li>
        </ul>
      </div>
    </main>
  );
}
