"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-peps.png"
            alt="PEPS - Performance Prévention Santé"
            width={150}
            height={60}
            priority
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link className="nav-link" href="/">Accueil</Link>
          <Link className="nav-link" href="/objectif">Objectif</Link>
          <Link className="nav-link" href="/moyens">Moyens</Link>
          <Link className="nav-link" href="/formations">Formations</Link>
          <Link className="nav-link" href="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link className="btn-primary" href="/contact">Contact</Link>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden text-peps-blue"
          onClick={() => setOpen(!open)}
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Drawer mobile */}
      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col gap-4 px-6 py-6">
          <Link className="nav-link" href="/" onClick={() => setOpen(false)}>Accueil</Link>
          <Link className="nav-link" href="/objectif" onClick={() => setOpen(false)}>Objectif</Link>
          <Link className="nav-link" href="/moyens" onClick={() => setOpen(false)}>Moyens</Link>
          <Link className="nav-link" href="/formations" onClick={() => setOpen(false)}>Formations</Link>
          <Link className="nav-link" href="/qui-sommes-nous" onClick={() => setOpen(false)}>Qui sommes-nous</Link>
          <Link className="btn-primary w-fit" href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
