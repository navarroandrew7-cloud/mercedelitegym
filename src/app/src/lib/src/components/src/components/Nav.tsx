import Link from "next/link";
import CtaButton from "./CtaButton";

export default function Nav() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold">
          Merced Elite Gym
        </Link>
        <CtaButton />
      </div>
    </nav>
  );
}
