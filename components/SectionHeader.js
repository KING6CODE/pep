import { motion } from "framer-motion";


export default function SectionHeader({ title, subtitle }) {
return (
<div className="text-center">
<motion.h1 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-bold">
{title}
</motion.h1>
{subtitle && (
<motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-2 text-slate-600 max-w-2xl mx-auto">
{subtitle}
</motion.p>
)}
</div>
);
}
