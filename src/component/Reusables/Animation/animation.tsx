import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export const SlideUpAnimation = ({
  children,
  duration,
}: {
  children?: ReactNode;
  duration: number;
}) => {
  return (
    <div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: duration, ease: "easeInOut" }}
        // transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface TypewriterEffectProps {
  text: string;
  typingSpeed?: number;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  typingSpeed = 100,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");

    const typeWriter = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typeWriter);
        setIsComplete(true);
      }
    }, typingSpeed);

    return () => clearInterval(typeWriter);
  }, [text, typingSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      {isComplete && <span className="text-transparent">|</span>}{" "}
    </motion.div>
  );
};
