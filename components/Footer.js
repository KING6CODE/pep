import Link from "next/link";


export default function Footer() {
return (
<footer className="mt-16 border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-600">© {new Date().getFullYear()} PEPS – Performance Prévention Santé</p>
<div className="flex items-center gap-4 text-sm">
<Link href="/mentions" className="underline">Mentions légales</Link>
<Link href="/contact" className="underline">Contact</Link>
</div>
</div>
</footer>
);
}
