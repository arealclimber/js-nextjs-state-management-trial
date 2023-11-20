import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full mt-10 items-center text-xl space-y-5">
        <Link
          href="/context_page"
          className="text-blue-800 hover:text-blue-300 border-black border-b py-5"
        >
          {" "}
          Context{" "}
        </Link>
        <Link
          href="/zustand_page"
          className="text-blue-800 hover:text-blue-300 border-black border-b py-5"
        >
          {" "}
          Zustand{" "}
        </Link>
        <Link
          href="/redux_toolkit_page"
          className="text-blue-800 hover:text-blue-300 border-black border-b py-5"
        >
          {" "}
          Redux Toolkit{" "}
        </Link>
        <Link
          href="/zustand_create_store_page"
          className="text-blue-800 hover:text-blue-300"
        >
          {" "}
          Zustand create store{" "}
        </Link>
      </div>
    </>
  );
}
