import { motion } from 'framer-motion';

export default function SectionShell({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`section-offset ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
