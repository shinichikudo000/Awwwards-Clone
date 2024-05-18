import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
    const scrollRef = useRef(null)
    const sectionScrollRef = useRef(null)
    const divScroll = useScroll({
        target: scrollRef,
        offset: ['start start', 'end end']
    })
    const sectionScroll = useScroll({
        target: sectionScrollRef,
        offset: ['start start', 'end end']
    })
    const scaleDivX = useTransform(divScroll.scrollYProgress, [0, 1], [0.673, 1], { clamp: true})
    const scaleDivY = useTransform(divScroll.scrollYProgress, [0, 1], [0.673, 1], { clamp: true})
    const opacityDiv = useTransform(divScroll.scrollYProgress, [0.99, 1], [1, 0])
    const opacityImg = useTransform(sectionScroll.scrollYProgress, [0.4, 1], [1, 0])
    return ( 
        <section ref={sectionScrollRef} className="text-black">
            <motion.div className="sticky top-0 left-0 h-[100vh] w-[100vw] z-0"
                style={{
                    opacity: opacityImg
                }}>
                <img src="https://primary.jwwb.nl/public/q/r/z/temp-auyeiuqtjvskyqebigco/s36ldq/Bevroren-Bloemen-Nanda-Bussers-Heartworks-1.jpg" alt="hero-background" className="object-cover w-full h-full z-0" />
            </motion.div>
            <div ref={scrollRef} className="h-[150vh] w-full z-20 mt-[-100vh]">
                <div className="sticky top-0 left-0 w-full h-[100vh] flex justify-center items-center">
                    <motion.div 
                        style={{
                            scaleX: scaleDivX,
                            scaleY: scaleDivY,
                            width: '42.7%',
                            height: '100vh',
                            minWidth: '69vh',
                            maxWidth: '700px'
                        }}
                        className="bg-white p-8"
                    >
                        <div className="w-3/4 mx-auto h-full flex flex-col justify-between">
                            <div className="w-full text-center font-semibold text-lg uppercase leading-none">
                                <p>Example Example</p>
                                <p>+63963914223</p>
                                <p>example@curatecity.com</p>
                            </div>
                            <div className="w-full text-center">
                                <h1 className="text-7xl font-bold">CURAT(E)</h1>
                                <h3 className="text-4xl font-normal italic">City</h3>
                            </div>
                            <div className="w-full text-center text-2xl">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                            <motion.div 
                                style={{opacity: opacityDiv}}
                                className="w-full text-center text-lg font-bold"
                            >
                                <p>SCROLL DOWN</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full flex justify-center items-center z-10 relative">
                <div className="w-[42.7%] min-w-[69vh] max-w-[700px] bg-white px-4 pb-4 pt-20">
                    <div className="w-3/4 h-full mx-auto flex flex-col text-center gap-20">
                        <p className="text-4xl">In hac habitasse platea dictumst</p>
                        <p className="text-5xl font-bold">SED VITAE IPSUM SAPIEN. SUSPENDISSE POTENTI</p>
                        <p className="text-4xl">Cras sed libero sed sapien euismod convallis a ut libero</p>
                        <p className="text-2xl font-bold">PROIN VIVERRA DIGNISSM PURUS, UT FERMENTUM ELIT SOLLICITUDIN SED</p>
                        <p className="text-6xl font-bold">(E)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}