"use client";

import { useState } from "react";

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const [lightTheme, setLightTheme] = useState(true);

  return (
    <body className={lightTheme ? "light-teme" : "dark-teme"}>
      {children}
    </body>
  );
}
