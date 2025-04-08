"use client";

import dynamic from "next/dynamic";
import ReactAsyncSelect, {
  AsyncProps as AsyncSelectProps,
} from "react-select/async";

export const AsyncSelect = dynamic(() => import("react-select/async"), {
  ssr: false,
}) as unknown as ReactAsyncSelect;

export type { AsyncSelectProps };
