import Image from "next/image";

import Dashboard from './components/Dashboard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-full">
      <div className="flex rounded-[6px] w-[80%] h-[900px] bg-[#202A37]">
        <Dashboard />
        <nav className="flex w-full justify-center px-[100px] pt-2">
        </nav>
      </div>
    </main>
  );
}
