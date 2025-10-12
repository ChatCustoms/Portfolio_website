// src/app/Page.tsx
import { ReactNode } from "react";

type PageProps = {
  bg: string;                 // imported image
  overlay?: string;           // optional, default keeps text readable
  children: ReactNode;
};

export default function Page({ bg, overlay = "rgba(10,12,16,0.45)", children }: PageProps) {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
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
