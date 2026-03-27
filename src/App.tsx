import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = `Nutre | ${t("message")}`;
  }, [t]);

  return (
    <main className="bg-background flex min-h-screen flex-col items-center justify-center text-center">
      <div className="container mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-4">
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          <h1 className="text-6xl font-semibold text-emerald-500">{t("message")}</h1>

          <p className="text-lg text-neutral-400">{t("description")}</p>
        </div>

        <p className="mb-8 text-sm font-light text-neutral-400">
          © {new Date().getFullYear()} · Henna Software - {t("disclaimer")}
        </p>
      </div>
    </main>
  );
}
