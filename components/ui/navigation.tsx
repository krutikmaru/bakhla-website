import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="flex fixed top-0 z-10 w-full bg-white justify-between items-center px-12 py-6 border-b-[1px] border-neutral-200">
      <Link href="/">
        <Image
          src="/logo-full.png"
          height={53}
          width={120}
          alt="Bakhla Tours Logo"
        />
      </Link>
    </nav>
  );
}

export default Navigation;
