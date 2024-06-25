"use client";

import { AnimatePresence } from "framer-motion"
export default function PageTransition({children}) {
    return(
        <AnimatePresence>
            {children}
        </AnimatePresence>
    )
}