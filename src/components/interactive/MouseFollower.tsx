import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const codeSnippets = [
    "$ kubectl apply -f",
    "docker build -t app",
    "npm run deploy",
    "git push origin",
    "terraform apply",
    "ssh user@prod",
    "systemctl restart",
    "npm install",
  ];

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {codeSnippets.map((snippet, i) => {
        const angle = (i / codeSnippets.length) * Math.PI * 2;
        const radius = 40 + i * 15;
        
        return (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-primary/40 whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{
              x: mousePosition.x + Math.cos(angle) * radius,
              y: mousePosition.y + Math.sin(angle) * radius,
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {snippet}
          </motion.div>
        );
      })}
    </div>
  );
};
