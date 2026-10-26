import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { AdminProviders } from "./blog/ui";
import "./admin.css";

// Scoped to /admin only (via className below) — the public site keeps its
// branded Rajdhani/Quicksand fonts untouched. Inter reads as a more neutral,
// "modern SaaS dashboard" face for a dense data-management UI.
const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Admin Blog - SECURIFORM",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}>
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-4 sm:px-6">
          <Link href="/admin/blog" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-red-600 text-sm font-bold text-white">
              S
            </span>
            <span className="text-base font-bold tracking-tight text-slate-900 sm:text-lg">
              Admin Blog <span className="text-red-600">SECURIFORM</span>
            </span>
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            ← Retour au site
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
        <AdminProviders>{children}</AdminProviders>
      </div>
    </div>
  );
}
