import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "PROGRAM", href: "/program" },
  { name: "COMMITEE", href: "/commitee" },
  { name: "AUTHORS", href: "/authors" },
  { name: "HACKATHON", href: "/hackathon" },
  { name: "SPONSORS", href: "/sponsors" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-[0.6%] left-[2.25%] right-[2.25%] h-[68px] border-[2px] border-white flex items-center justify-start px-10 z-50 bg-transparent hidden xl:flex">
      <div className="relative w-[131px] h-[38px] ">
        <Link href="/">
          <Image
            src="/images/ieee-logo.svg"
            alt="IEEE Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>
      <div className="flex gap-10 ml-24">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="font-poppins font-bold text-[20px] text-white hover:text-gray-300 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
