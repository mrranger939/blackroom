"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export default function MobileNav() {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px] ">
      <Sheet >
        <SheetTrigger asChild>
          <Image
            src={"/icons/hamburger.svg"}
            height={36}
            width={36}
            alt="Humburger Icon"
            className="cursor-pointer sm:hidden"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1 pt-3 pl-3">
          <Link href={"/"} className="flex items-center gap-1 left-0 top-0">
            <Image
              src={"/goodbg.png"}
              width={32}
              height={32}
              alt="my Logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden uppercase">
              BlackRoom
            </p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto ">
           
              <section className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathname ===
                    link.route; /* || pathname.startsWith(link.route) */
                  return (
                    <SheetClose key={link.route} asChild>
                      <Link
                        href={link.route}
                        
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          {
                            "bg-blue-1": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className=" font-semibold ">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
