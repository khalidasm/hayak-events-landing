"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            className="fixed left-1/2 top-0 z-50 mt-4 sm:mt-7 flex w-[95%] sm:w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-full p-2 sm:p-3 overflow-hidden"
            style={{
                background: "rgba(245, 240, 255, 0.7)",
                backdropFilter: "blur(4px) saturate(180%)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderTop: "1px solid rgba(255,255,255,0.6)",
                borderLeft: "1px solid rgba(255,255,255,0.4)",
            }}
            initial={{ 
                y: -100, 
                opacity: 0,
                scale: 0.8
            }}
            animate={{ 
                y: 0, 
                opacity: 1,
                scale: 1
            }}
            whileHover={{
                background: "rgba(245, 240, 255, 0.8)",
                backdropFilter: "blur(12px) saturate(200%)",
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.6,
                delay: 0.2
            }}
        >
            <div className="flex w-full items-center justify-between">
                <Image 
                    src="/logo.png" 
                    alt="Logo" 
                    width={50} 
                    height={50} 
                    className="ml-2 sm:ml-3" 
                />
            </div>
        </motion.nav>
    );
};

export default Navbar;
