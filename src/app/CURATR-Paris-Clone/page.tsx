'use client'

import { useEffect } from "react";
import HeroSection from "./HeroSection";
import Lenis from 'lenis';
import Header from "./Header";

export default function CURATRPage() {
    useEffect(() => {
        const lenis = new Lenis()

        lenis.on('scroll', (e: any) => {
          console.log(e)
        })
        
        function raf(time: any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        
        requestAnimationFrame(raf)
    }, []);

    return (
        <>
            <Header />
            <HeroSection />
        </>
    );
}