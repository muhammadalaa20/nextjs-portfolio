"use client";

import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/Sheet";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";


const links = [
    {   name: "Home",
        path: "/",
    },
    {   name: "services",
        path: "/services",
    },
    {   name: "resume",
        path: "/resume",
    },
    {   name: "work",
        path: "/work",
    },
    {   name: "contact",
        path: "/contact",
    },

];

export default function MobileNav (){
    const pathname= usePathname();
    return(
        <Sheet>
        <SheetTrigger className="flex items-center justify-center">
            <CiMenuFries className="text-[32px] text-accent "/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="text-center mt-20 mb-12">
                <Link href="/" className="text-3xl font-semibold">
                    M.Alaa <span className="text-accent">.</span>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link,index) => {
                    return(
                        <Link key={index} href={link.path} className={`text-xl capitalize hover:text-accent transition-all ${pathname===link.path && "text-accent border-b-2 border-accent"}`}>
                            {link.name}
                        </Link>
                )}
                )}
            </nav>
        </SheetContent>
        </Sheet>
    )
}