import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Nutre | Coming Soon";
  }, []);

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center text-center">
      <div className="container mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <h1 className="text-primary text-6xl font-semibold">Coming Soon</h1>

          <p className="text-muted-foreground text-lg">
            We're building a better way to manage your patients. Stay tuned — something great is on its way.
          </p>
        </div>

        <p className="text-muted-foreground mb-8 text-sm font-light">
          © {new Date().getFullYear()} · Henna Software - All rights reserved
        </p>
      </div>
    </main>
  );
}
