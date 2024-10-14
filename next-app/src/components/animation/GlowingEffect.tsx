"use client";
import cn from "@/utils/tailwind-utils";
import { motion } from "framer-motion";

interface Props {
    blur?: number;
    size?: number; // Độ rộng của shadow
    className?: string;
    position?: "left" | "center" | "right";
}

const GlowingEffect = ({
    blur = 368,
    size = 250,
    className,
    position = "center",
}: Props) => {
    const blurValue = `${blur}px`;
    const sizeValue = `${size}px`;
    const positionValue =
        position === "center"
            ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            : position === "left"
                ? "left-0"
                : position === "right" && "right-0";

    return (
        <motion.div
            className={cn("absolute rounded-full z-0", positionValue, className)}
            animate={{
                boxShadow: [
                    `0 0 ${blurValue} ${size / 2 + "px"
                    } rgba(241, 195, 87, 0.4), 0 0 ${blurValue} ${sizeValue} rgba(242, 87, 87, 0.1)`,
                    `0 0 ${blurValue} ${size / 4 + "px"
                    } rgba(241, 195, 87, 0.1), 0 0 ${blurValue} ${sizeValue} rgba(242, 87, 87, 0.1)`,
                    `0 0 ${blurValue} ${size / 2 + "px"
                    } rgba(241, 195, 87, 0.4), 0 0 ${blurValue} ${sizeValue} rgba(242, 87, 87, 0.1)`,
                ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
        />
    );
};

export default GlowingEffect;
