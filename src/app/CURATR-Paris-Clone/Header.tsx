import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
    const [isHover, setIsHover] = useState(false);
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (isHover) {
            animate([
                [
                    "nav", 
                    { x: '-69%'},
                    { duration: 0.5, ease: 'easeIn' }
                ],
                [
                    ".nav-bg",
                    { opacity: '1'},
                    { at: "<"}
                ],
                [
                    "li",
                    { textAlign: 'end'},
                    { duration: 1}
                ]
            ]);
        } else {
            animate([
                [
                    "nav", 
                    { x: '0%' },
                    { duration: 0.5, ease: 'easeIn' }
                ],
                [
                    ".nav-bg",
                    { opacity: '0'},
                    { at: "<"}
                ],
                [
                    "li",
                    { textAlign: 'start'},
                    { delay: 1}
                ]
            ]);
        }
    }, [isHover, animate]);

    return (
        <motion.header 
            ref={scope} 
            className="fixed right-0 w-auto h-auto z-40 text-black" 
            onMouseEnter={() => setIsHover(true)} 
            onMouseLeave={() => setIsHover(false)}  
        >
            <div className="w-auto h-full translate-x-[69%] pt-[130px]">
                <div>
                    <h1 className="rotate-[-90deg] origin-top-left text-xl font-semibold">CURAT(E)</h1>
                </div>
                <motion.nav className="flex flex-col gap-3">
                    <ul className="leading-tight uppercase text-sm font-semibold">
                        <li className="transition duration-[2s]"><Link href=''>Agency</Link></li>
                        <li className="transition duration-[2s]"><Link href=''>Curation</Link></li>
                        <li className="transition duration-[2s]"><Link href=''>Services</Link></li>
                        <li className="transition duration-[2s]"><Link href=''>Contacts</Link></li>
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
            <div className="opacity-0 nav-bg bg-gradient-to-l from-[#121212] to-[#12121200] w-[150%] h-[100vh] absolute top-0 right-0">

            </div>
        </motion.header>
    );
}
