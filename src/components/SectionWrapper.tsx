import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

const SectionWrapper = ({ children, className, dark, id }: SectionWrapperProps) => (
  <section id={id} className={cn(dark ? "bg-dark-section" : "bg-light-section", "py-20 lg:py-28", className)}>
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container mx-auto px-4 lg:px-8"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
