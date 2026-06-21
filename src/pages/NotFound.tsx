import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-dvh items-center justify-center bg-background overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%", left: "50%", transform: "translate(-50%, -50%)",
          width: "320px", height: "320px",
          background: "radial-gradient(circle, hsl(var(--signal-red) / 0.22), transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div className="relative text-center px-6 max-w-md">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-foreground/40 mb-6">
          Signal lost
        </p>
        <h1 className="font-display text-[88px] md:text-[120px] tracking-wider leading-[0.9] text-foreground mb-4">
          404
        </h1>
        <p className="font-body text-[15px] md:text-[16px] leading-[1.7] text-foreground/55 mb-10">
          The story you were looking for has not been written here — or it travelled somewhere else en route.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 font-heading text-[12px] tracking-[0.18em] uppercase font-medium transition-all duration-200 hover:brightness-110"
          style={{
            background: "hsl(var(--brass))",
            color: "hsl(340 45% 10%)",
            boxShadow: "0 4px 20px -4px hsl(var(--brass) / 0.35)",
          }}
        >
          Return to Home →
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
