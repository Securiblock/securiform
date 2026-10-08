"use client";

import Link from "next/link";
import {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";

// Shared visual primitives for the admin blog UI (dashboard, topic detail,
// editor, new-topic form) — purely presentational, no business logic. Keeps
// every button/card/confirm/toast looking the same instead of each page
// hand-rolling its own Tailwind classes slightly differently.

// --- Button ---------------------------------------------------------------

type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "ghost"
  | "success"
  | "dark"
  | "warning"
  | "info";
type ButtonSize = "sm" | "md";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "border border-red-600 bg-red-600 text-white hover:bg-red-700 hover:border-red-700",
  secondary: "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  danger: "border border-red-200 bg-white text-red-600 hover:bg-red-50 hover:border-red-300",
  ghost: "border border-transparent bg-transparent text-slate-500 hover:bg-slate-100 hover:text-slate-900",
  success: "border border-green-600 bg-green-600 text-white hover:bg-green-700 hover:border-green-700",
  dark: "border border-slate-900 bg-slate-900 text-white hover:bg-slate-800 hover:border-slate-800",
  warning: "border border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100 hover:border-orange-300",
  info: "border border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 hover:border-blue-300",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className = "", type = "button", children, ...rest },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
});

// Same visual treatment as Button, but renders a Next.js <Link> — for
// actions that navigate instead of triggering a handler.
export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex shrink-0 items-center justify-center gap-1.5 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

// --- Card ------------------------------------------------------------------

export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// --- PageHeader --------------------------------------------------------------

export function PageHeader({
  title,
  subtitle,
  actions,
  back,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  back?: { href: string; label: string };
}) {
  return (
    <div className="mb-8">
      {back && (
        <Link
          href={back.href}
          className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← {back.label}
        </Link>
      )}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
        </div>
        {actions && <div className="flex flex-wrap gap-3">{actions}</div>}
      </div>
    </div>
  );
}

// --- StatChip ----------------------------------------------------------------

export function StatChip({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-xs font-medium text-slate-500">{label}</div>
    </div>
  );
}

// --- Confirm dialog (replaces window.confirm) --------------------------------

type ConfirmOptions = {
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
};

type ConfirmFn = (options: ConfirmOptions) => Promise<boolean>;

const ConfirmContext = createContext<ConfirmFn | null>(null);

export function useConfirm(): ConfirmFn {
  const ctx = useContext(ConfirmContext);
  if (!ctx) throw new Error("useConfirm doit être utilisé dans <AdminProviders>.");
  return ctx;
}

function ConfirmProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<(ConfirmOptions & { resolve: (v: boolean) => void }) | null>(
    null
  );
  const confirmRef = useRef<HTMLButtonElement>(null);

  const confirm = useCallback<ConfirmFn>((options) => {
    return new Promise<boolean>((resolve) => {
      setState({ ...options, resolve });
      requestAnimationFrame(() => confirmRef.current?.focus());
    });
  }, []);

  function settle(result: boolean) {
    state?.resolve(result);
    setState(null);
  }

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {state && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          onClick={() => settle(false)}
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
            className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 id="confirm-title" className="mb-2 text-lg font-bold text-slate-900">
              {state.title}
            </h2>
            {state.description && (
              <p className="mb-5 text-sm text-slate-500">{state.description}</p>
            )}
            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => settle(false)}>
                {state.cancelLabel || "Annuler"}
              </Button>
              <Button ref={confirmRef} variant="primary" onClick={() => settle(true)}>
                {state.confirmLabel || "Confirmer"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
}

// --- Toasts (replaces window.alert for feedback) -----------------------------

type ToastVariant = "success" | "error";
type ToastItem = { id: number; message: string; variant: ToastVariant };
type ToastFn = (message: string, variant?: ToastVariant) => void;

const ToastContext = createContext<ToastFn | null>(null);

export function useToast(): ToastFn {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast doit être utilisé dans <AdminProviders>.");
  return ctx;
}

const TOAST_STYLES: Record<ToastVariant, string> = {
  success: "border-green-200 bg-green-50 text-green-800",
  error: "border-red-200 bg-red-50 text-red-800",
};

function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);

  const push = useCallback<ToastFn>((message, variant = "success") => {
    const id = ++idRef.current;
    setToasts((t) => [...t, { id, message, variant }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 4500);
  }, []);

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[110] flex w-full max-w-sm flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`pointer-events-auto rounded-xl border px-4 py-3 text-sm font-medium shadow-lg ${TOAST_STYLES[t.variant]}`}
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// --- Combined provider, mounted once in app/admin/layout.tsx -----------------

export function AdminProviders({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <ConfirmProvider>{children}</ConfirmProvider>
    </ToastProvider>
  );
}
