"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


const links = [
{ href: "/", label: "Accueil" },
{ href: "/objectif", label: "Notre objectif" },
{ href: "/moyens", label: "Moyens" },
{ href: "/formations", label: "Formations" },
{ href: "/qui-sommes-nous", label: "Qui sommes‑nous" },
{ href: "/contact", label: "Contact" },
{ href: "/mentions", label: "Mentions légales" },
];


export default function NavBar() {
const [open, setOpen] = useState(false);
return (
<header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<Link href="/" className="font-black tracking-tight text-xl flex items-baseline gap-2">
<span className="text-peps.blue">PEPS</span>
<span className="text-xs text-slate-500">Performance Prévention Santé</span>
</Link>
<nav className="hidden md:flex items-center gap-1">
{links.map((l) => (
<Link key={l.href} href={l.href} className="px-3 py-2 rounded-xl text-sm hover:bg-slate-100">
{l.label}
</Link>
))}
</nav>
<button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
{open ? <X /> : <Menu />}
</button>
</div>
{open && (
<div className="md:hidden border-t border-slate-200 bg-white">
<nav className="max-w-7xl mx-auto px-6 py-3 grid gap-1">
{links.map((l) => (
<Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-xl text-sm hover:bg-slate-100">
{l.label}
</Link>
))}
</nav>
</div>
)}
</header>
);
}
