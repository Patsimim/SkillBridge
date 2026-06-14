"use client";

import { useState } from "react";
import BecomeHelperModal from "./component/BecomeHelperModal";

export default function BecomeHelperPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ minHeight: "100%" }}>
      {!isOpen && (
        <div style={{ padding: "2rem" }}>
          <button
            type='button'
            onClick={() => setIsOpen(true)}
            style={{
              padding: "10px 20px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Become a Helper
          </button>
        </div>
      )}

      {isOpen && <BecomeHelperModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
