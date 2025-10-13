// src/app/Page.tsx
import { ReactNode } from "react";

type PageProps = {
  bg?: string; // make optional
  overlay?: string;
  children: ReactNode;
};

export default function Page({
  bg,
  overlay = "rgba(10,12,16,0.45)",
  children,
}: PageProps) {
  return (
    <div
      style={{
        ...(bg
          ? {
              backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(16px,3vw,48px)",
          width: "100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
