'use client'

import ErrorPage from "@/components/error/error";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
    const router = useRouter();
    const reload = () => {
      startTransition(() => {
        router.refresh();
        reset();
      });
    }

    return <ErrorPage error={error} reload={reload} />
}