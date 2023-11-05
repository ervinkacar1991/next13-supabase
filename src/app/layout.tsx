"use client";
import { useState } from "react";
import "./globals.scss";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./theme/theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Header from "@/app/components/Header";
import Landing from "./components/Landing";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);
  const [isLoggedIn, setILoggedIn] = useState(false);

  const switchTheme: any = () => {
    setIsDark(!isDark);
  };

  return (
    <html lang="en">
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <body>
            <Header switchTheme={switchTheme} />
            {!isLoggedIn ? <Landing /> : children}
          </body>
        </LocalizationProvider>
      </ThemeProvider>
    </html>
  );
}
