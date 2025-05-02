"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <HoveredLink href="/hobby">Flappy Birds</HoveredLink>
            <HoveredLink href="/individual">URL Shotener</HoveredLink>
            <HoveredLink href="/team">React Hooks</HoveredLink>
            <HoveredLink href="/enterprise">HustleBoard</HoveredLink>
            <HoveredLink href="/enterprise">use product item here</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Personal">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;