"use client"
import {motion} from "framer-motion"
import Image from "next/image"
export default function Photo() {
    return(
        <div className="w-full h-full relative">
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay: 1, duration:.4, ease: "easeIn"}}}>
                {/* The Home image */}
                <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay: 1.5, duration:.4, ease: "easeInOut"}}} 
            className="w-[298px] h-[298px] xl:w-[400px] xl:h-[400px] mix-blend-lighten absolute">
                    <Image
                        src="/muhammad.png" priority quality={100} fill
                        alt="myImage"
                        className="object-contain rounded-full"
                    />
                </motion.div>
                {/* The Home image border */}
                <motion.svg className="w-[300px] h-[300px] xl:w-[406px] xl:h-[406px]" 
                fill="transparent"
                viewBox="0 0 406 406"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                       cx="203"
                       cy="203"
                       r="200"
                       stroke="#00ff99"
                       strokeWidth="3"
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       initial={{strokeDasharray:"24 10 0 0"}}
                       animate={{
                        strokeDasharray:["15 120 25 25","26 17 111 23", "4 250 22 22"],
                        rotate:[120, 360],
                    }}
                       transition={{duration:10, ease:"easeInOut", repeat: Infinity, repeatType: "reverse"}}
                       />
                </motion.svg>
            </motion.div>
        </div>
    )
}