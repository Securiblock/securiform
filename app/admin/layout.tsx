import type { Metadata } from "next";
import Link from "next/link";
import "./admin.css";

export const metadata: Metadata = {
  title: "Admin Blog — SECURIFORM",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/admin/blog" className="text-lg font-bold tracking-tight text-slate-900">
            Admin Blog <span className="text-red-600">SECURIFORM</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            ← Retour au site
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
    </div>
  );
}
