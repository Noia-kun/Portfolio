import { useEffect, useState } from "react";

export type ThemeMode = "system" | "light" | "dark";

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark" || stored === "system"
      ? stored
      : "system";
  });

  useEffect(() => {
    let isLight = false;

    if (mode === "system") {
      isLight = !window.matchMedia("(prefers-color-scheme: dark)").matches;
    } else {
      isLight = mode === "light";
    }

    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", mode);
  }, [mode]);

  return { mode, setMode };
}