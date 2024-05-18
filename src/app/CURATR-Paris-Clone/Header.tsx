import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isHover, setIsHover] = useState(false);
    const [scope, animate] = useAnimate();

    return (
        <motion.header 
            ref={scope} 
            className="fixed right-0 top-[130px] w-auto h-auto z-40 text-black" 
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}  
        >
            <div className="w-auto h-full translate-x-[69%]">
                <div>
                    <h1 className="rotate-[-90deg] origin-top-left text-xl font-semibold">CURAT(E)</h1>
                </div>
                <motion.nav className="flex flex-col gap-3">
                    <ul className="leading-tight uppercase text-sm font-semibold">
                        <li><Link href=''>Agency</Link></li>
                        <li><Link href=''>Curation</Link></li>
                        <li><Link href=''>Services</Link></li>
                        <li><Link href=''>Contacts</Link></li>
                    </ul>
                    <ul className="leading-tight uppercase text-sm font-semibold">
                        <li><Link href=''>example@curate.city</Link></li>
                        <li><Link href=''>@curate.city</Link></li>
                    </ul>
                    <ul className="leading-tight uppercase text-sm font-semibold">
                        <li>(EN)</li>
                        <li>FR</li>
                    </ul>
                </motion.nav>
            </div>
        </motion.header>
    );
}
