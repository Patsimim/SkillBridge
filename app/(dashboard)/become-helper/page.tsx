"use client";

import { useRouter } from "next/navigation";
import BecomeHelperModal from "./component/BecomeHelperModal";

export default function BecomeHelperPage() {
  const router = useRouter();

  return (
    <div style={{ minHeight: "100%" }}>
      <BecomeHelperModal onClose={() => router.push("/")} />
    </div>
  );
}
