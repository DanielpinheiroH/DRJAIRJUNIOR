import { m, useReducedMotion } from 'framer-motion';
import type { PropsWithChildren } from 'react';

export function Reveal({ children }: PropsWithChildren) {
  const reduceMotion = useReducedMotion();
  return (
    <m.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
