import React from 'react';
import { motion } from 'framer-motion';

const CustomCursor = ({ mousePosition }) => (
    <motion.div
        className="fixed w-6 h-6 bg-orange-500/20 rounded-full pointer-events-none z-50"
        animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
        }}
        transition={{
            type: "spring",
            mass: 0.2,
            stiffness: 400,
            damping: 15
        }}
    />
);

export default CustomCursor;