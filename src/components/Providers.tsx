"use client";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <SonnerToaster richColors position="top-right" />
      {children}
    </>
  );
}
