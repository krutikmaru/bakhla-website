"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

const navigation = [];
function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex fixed top-0 z-50 w-full bg-white justify-between items-center px-12 py-6 border-b-[1px] border-neutral-200">
      <Link href="/">
        <Image
          src="/logo-full.png"
          height={53}
          width={120}
          alt="Bakhla Tours Logo"
        />
      </Link>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </nav>
  );
}

export default Navigation;

function DesktopNavigation() {
  return (
    <div className="flex items-center space-x-4">
      <Link href={"/packages/hajj"}>Hajj</Link>
      <Link href={"/packages/umrah"}>Umrah</Link>
      <Link href={"/packages/ramadan"}>Ramadan</Link>
    </div>
  );
}

function MobileNavigation() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-10">
        <DropdownMenuLabel>Tours</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push("/packages/hajj")}>
          Hajj
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/packages/umrah")}>
          Umrah
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => router.push("/packages/ramadan")}>
          Ramadan
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
