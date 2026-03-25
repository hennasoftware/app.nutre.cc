import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Nutre | Coming Soon";
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-50 text-center">
      <div className="container mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <h1 className="text-6xl font-semibold text-emerald-500">Coming Soon</h1>

          <p className="text-lg text-neutral-400">
            We're building a better way to manage your patients. Stay tuned — something great is on its way.
          </p>
        </div>

        <p className="mb-8 text-sm font-light text-neutral-400">
          © {new Date().getFullYear()} · Henna Software - All rights reserved
        </p>
      </div>
    </main>
  );
}
