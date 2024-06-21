import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="z-0 flex items-center justify-center w-full text-xl font-semibold transition-colors duration-200 shadow-xl cursor-pointer text-zinc-900 hover:text-gray-400 whitespace-nowrap">
      <Link href="/" className="min-w-[100px] min-h-[27px] mr-6">
        <Image alt="logo" src="/logo/Croft.svg" width="100" height="32" />
      </Link>
      <ul className="flex items-center h-16 mr-16 whitespace-nowrap">
        <li className="px-3 duration-200 hover:text-black">
          <Link href="/">
            <span>Real-time</span>
          </Link>
        </li>

        <Link href="/date">
          <li className="px-3 duration-200 hover:text-black">
            <span>Date</span>
          </li>
        </Link>

        <Link href="/period">
          <li className="px-3 duration-200 hover:text-black">
            <span>Period</span>
          </li>
        </Link>
        <Link href="/settings">
          <li className="pr-6 duration-200 ml-96 hover:text-black">
            <span>Settings</span>
          </li>
        </Link>
        <li className="duration-200 hover:text-black">
          <span>Sign Out</span>
        </li>
      </ul>
    </nav>
  );
}
