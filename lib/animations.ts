import { Variants } from 'framer-motion';

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const cardHoverVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

export const navbarTransition = {
  duration: 0.2,
  ease: 'easeInOut',
};

export const drawerVariants: Variants = {
  closed: { x: '100%', transition: { duration: 0.3 } },
  open: { x: 0, transition: { duration: 0.3 } },
};

export const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.1, 1],
    boxShadow: [
      '0 0 0 0 rgba(37, 211, 102, 0.4)',
      '0 0 0 10px rgba(37, 211, 102, 0)',
      '0 0 0 0 rgba(37, 211, 102, 0)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};
