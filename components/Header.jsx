import Link from "next/link";
import {Button} from "./ui/button";
import Nav from "./Nav";
export default function Header() {
    return (
        <>
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center ">  
                <Link href="/">
                <h1 className="text-3xl font-semibold">
                    M.Alaa <span className="text-accent">.</span>
                </h1>
                </Link>

                {/*desktop nav*/}
                <div className="hidden xl:flex items-center gap-8">
                <Nav />
                <Link href="/contact">
                    <Button>Hire Me</Button>
                </Link>
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">
                   mobile nav
                </div>
                
            </div>
        </header>
        </>
    )
}