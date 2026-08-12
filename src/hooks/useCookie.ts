"use client";

import { useState, useCallback } from "react";

export function useCookie(name: string, defaultValue: string = "") {
  const getCookie = useCallback(() => {
    if (typeof document === "undefined") return defaultValue;
    const match = document.cookie.match(
      new RegExp("(^| )" + name + "=([^;]+)")
    );
    return match ? decodeURIComponent(match[2]) : defaultValue;
  }, [name, defaultValue]);

  const [value, setValue] = useState(getCookie);

  const updateCookie = useCallback(
    (newValue: string, days: number = 30) => {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${name}=${encodeURIComponent(
        newValue
      )}; expires=${expires}; path=/; Secure; SameSite=Strict`;
      setValue(newValue);
    },
    [name]
  );

  const deleteCookie = useCallback(() => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    setValue("");
  }, [name]);

  return [value, updateCookie, deleteCookie] as const;
}