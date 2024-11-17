import NavItems from "@/components/custom/NavBar";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useScrollElement } from '@/hooks/use-scroll-element';

export default function Header() {
    const headerRef = useRef(null);
    const { isScroll } = useScrollElement(headerRef)


    function onEachItemClick(e: any) {
        // !TODO: handle click
        console.log(e.target.tagName)
    }
    return (<header ref={headerRef} className={cn("text-base font-os-regular fixed top-0 z-[10] w-full transition ease-in-out delay-150", {
        "bg-xx-highlight": isScroll,
    })}>
        <div className={cn('mx-auto flex max-w-7xl items-center justify-between py-[27px]')}>
            <div></div>
            <NavItems scroll={isScroll} onEachItemClick={onEachItemClick} />
            <div></div>
            <div className="md:hidden">
                <button className="focus:outline-none" id="menu-toggle">
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6h16M4 12h16m-7 6h7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    </header>)
}