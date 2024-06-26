"use client"
import {motion} from "framer-motion"
import Image from "next/image"
export default function Photo() {
    return(
        <div className="w-full h-full relative">
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay: 1, duration:.4, ease: "easeIn"}}}>
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay: 1.5, duration:.4, ease: "easeInOut"}}} 
            className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] mix-blend-lighten">
                    <Image
                        src="/pngwing.png" priority quality={100} fill
                        alt="myImage"
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}