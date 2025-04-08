"use client";

import {
  QueryClientProvider as TanstackQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import React, { useMemo } from "react";

interface IProps {
  children: React.ReactNode;
}

export const QueryClientProvider = ({ children }: IProps) => {
  const client = useMemo(() => new QueryClient(), []);

  return (
    <TanstackQueryClientProvider client={client}>
      {children}
    </TanstackQueryClientProvider>
  );
};
