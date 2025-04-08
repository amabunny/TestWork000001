import React, { useCallback } from "react";
import { useRouter } from "next/navigation";

export const useLink = () => {
  const router = useRouter();

  return useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      void router.push(e.currentTarget.href);
    },
    [router],
  );
};
